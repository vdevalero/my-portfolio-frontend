import "./Forms.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//URLS
import { PRIVATE, PUBLIC } from "../../api/urls.js";
//CUSTOM HOOKS
import { useTech } from "../../hooks/useTech.js";
export function FormProximTech() {
  const navigate = useNavigate();
  const params = useParams();
  const [formTech, setFormTech] = useState({ image: "", name: "" });

  const { responseOne, create, update } = useTech({
    url: PUBLIC.proximTechnology,
    adminUrl: PRIVATE.proximTechnology.crud,
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
    navigate("../ProximTech");
  };

  return (
    <div>
      <h2>{params.id ? "Edith Next Tech" : "Add Add Tech"}</h2>
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
        <button type="submit">{params.id ? "Update" : "Done"}</button>
      </form>
    </div>
  );
}
