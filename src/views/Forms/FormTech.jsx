import "./Forms.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//URLS
import { PRIVATE, PUBLIC } from "../../api/urls.js";
//CUSTOM HOOKS
import { useTech } from "../../hooks/useTech.js";
export function FormTech() {
  const navigate = useNavigate();
  const params = useParams();
  const [formTech, setFormTech] = useState({ image: "", name: "" });

  const { responseOne, create, update } = useTech({
    url: PUBLIC.technologies,
    adminUrl: PRIVATE.technologies.crud,
    id: params.id,
    data: formTech,
  });

  useEffect(() => {
    if (responseOne) {
      setFormTech({
        image: responseOne.image,
        name: responseOne.name,
      });
    }
  }, [params.id, responseOne]);

  const FormHandler = (e) => {
    setFormTech({
      ...formTech,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    params.id ? update() : create();
    navigate("../Tech");
  };

  return (
    <div>
      <h2>{params.id ? "Edith Technology" : "Add Technology"}</h2>
      <form className="Form" onSubmit={submitForm}>
        <label>Image URL:</label>
        <input
          value={formTech.image}
          name="image"
          type="text"
          onChange={FormHandler}
        />
        <label>Name technology</label>
        <input
          value={formTech.name}
          name="name"
          type="text"
          onChange={FormHandler}
        />
        <button>{params.id ? "Update" : "Done"}</button>
      </form>
    </div>
  );
}
