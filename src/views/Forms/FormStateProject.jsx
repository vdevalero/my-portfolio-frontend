import "./Forms.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTech } from "../../hooks/useTech";
import { PRIVATE, PUBLIC } from "../../api/urls";
export function FormStateProject() {
  const [data, setData] = useState({
    name: "",
    border_color: "",
    background_color: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const { responseOne, create, update } = useTech({
    url: PUBLIC.stateProject,
    adminUrl: PRIVATE.stateProject.crud,
    id: params.id,
    data,
  });
  useEffect(() => {
    if (responseOne) {
      setData({
        name: responseOne.name,
        border_color: responseOne.border_color,
        background_color: responseOne.background_color,
      });
    }
  }, [params.id, responseOne]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);
  const submit = (e) => {
    e.preventDefault();
    params.id ? update() : create();
    navigate("../States");
  };
  return (
    <div>
      <h2>{params.id ? "Edit State" : "Add State"}</h2>
      <form className="Form" onSubmit={submit}>
        <label>Nombre del Estado</label>
        <input
          name="name"
          type="text"
          placeholder="Nombre del estado"
          onChange={handleChange}
          value={data.name}
        />
        <label>Border Color:</label>
        <input
          type="color"
          name="border_color"
          onChange={handleChange}
          value={data.border_color}
        />
        <label>Background Color:</label>
        <input
          type="color"
          name="background_color"
          onChange={handleChange}
          value={data.background_color}
        />
        <button>{params.id ? "Update" : "Done"}</button>
      </form>
    </div>
  );
}
