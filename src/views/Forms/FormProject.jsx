import "./Forms.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
//CUSTOM HOOKS
import { useTech } from "../../hooks/useTech.js";
import { useGet } from "../../hooks/useGet";
import { PRIVATE, PUBLIC } from "../../api/urls.js";

export function FormProject() {
  const navigate = useNavigate();
  const params = useParams();
  const [addProject, setAddProject] = useState({
    title: "",
    description: "",
    uriProject: "",
    uriRepository: "",
    image: "",
    state: 3,
  });

  const { responseOne, create, update } = useTech({
    adminUrl: PRIVATE.project.crud,
    url: PUBLIC.projects,
    id: params.id,
    data: addProject,
  });
  const { response } = useGet({ url: PUBLIC.stateProject });
  useEffect(() => {
    if (responseOne) {
      setAddProject({
        title: responseOne.title,
        description: responseOne.description,
        uriProject: responseOne.uriProject,
        uriRepository: responseOne.uriRepository,
        image: responseOne.image,
        state: responseOne.state,
      });
    }
  }, [params.id, responseOne]);

  const handlerInputChange = (e) => {
    setAddProject({
      ...addProject,
      [e.target.name]:
        e.target.name === "state" ? Number(e.target.value) : e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    params.id ? update() : create();
    navigate("/Dashboard/Projects");
  };
  console.log(addProject);
  return (
    <div>
      <h2>{params.id ? "Editar projecto" : "Agregar projecto"}</h2>
      <form className="Form" onSubmit={submit}>
        <label>Estado del proyecto</label>
        <select
          value={addProject.state}
          name="state"
          onChange={handlerInputChange}
        >
          <option>Selecciona un estado:</option>
          {response.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <label>Url Image:</label>
        <input
          value={addProject.image}
          name="image"
          onChange={handlerInputChange}
          className="input"
          type="text"
          placeholder="URL Image"
        />

        <label>Title:</label>
        <input
          value={addProject.title}
          name="title"
          onChange={handlerInputChange}
          className="input"
          type="text"
          placeholder="Title"
        />

        <label>Description</label>
        <textarea
          value={addProject.description}
          name="description"
          onChange={handlerInputChange}
          className="input textarea"
          placeholder="Description"
        ></textarea>

        <label>Link project</label>
        <input
          value={addProject.uriProject}
          name="uriProject"
          onChange={handlerInputChange}
          className="input"
          type="text"
          placeholder="Link del projecto"
        />

        <label>Link repository</label>
        <input
          value={addProject.uriRepository}
          name="uriRepository"
          onChange={handlerInputChange}
          className="input"
          type="text"
          placeholder="Link del repositorio"
        />

        <button>{params.id ? "Update" : "Done"}</button>
      </form>
    </div>
  );
}
