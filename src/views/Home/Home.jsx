//dependecies
import "./Home.css";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//CUSTOM HOOKS
import { useGet } from "../../hooks/useGet.js";
import { PUBLIC } from "../../api/urls.js";
//Component Styled
import { Contact } from "../../components/Contact/Contact.jsx";
import { CardProject } from "../../components/CardProject/CardProject.jsx";
import { CardTecnology } from "../../components/CardTecnology/CardTecnology.jsx";

export function HomePage() {
  const { response: projectsApi } = useGet({ url: PUBLIC.projectsOverview });

  const { response: technologyApi } = useGet({ url: PUBLIC.technologies });

  const { response: proximTechnologyApi } = useGet({
    url: PUBLIC.proximTechnology,
  });
  console.log(projectsApi);
  return (
    <div>
      <div className="Presentacion">
        <div className="Introduction">
          <h2>Hola, soy</h2>
          <h1>Victor Valero</h1>
          <p>Full Stack Developer / Tecnico informatico</p>
        </div>
        <p className="Presentacion-p">
          Soy desarrollador web full stack. Tengo 2 años de
          experiencia.Actualmente trabajando como tecnico informatico y
          estudiando grado superior de desarrollo de aplicaciones web (DAW).
          Aqui os dejo algnos proyectos personales.
        </p>
        <Contact />
      </div>

      <div className="Proyectos">
        <h2>Proyectos:</h2>
        <div className="Proyectos-Grid">
          {projectsApi.map((data) => (
            <CardProject
              image={data?.image}
              border={data?.border_color}
              background={data?.background_color}
              name={data?.name}
              title={data?.title}
              description={data?.description}
              uriProject={data?.uriProject}
              uriRepository={data?.uriRepository}
            />
          ))}
        </div>
        <div className="Mas-Proyectos">
          <Link to={"Projects"}>
            <button>Ver mas...</button>
          </Link>
        </div>
      </div>

      <div className="Tecnology">
        <h2>Tecnologias:</h2>
        <div className="Tecnology-Grid">
          {technologyApi.map((data) => (
            <CardTecnology
              key={data.id}
              image={data?.image}
              name={data?.name}
            />
          ))}
        </div>
      </div>

      {proximTechnologyApi.length > 0 && (
        <div className="Tecnology">
          <h2>Proximamante:</h2>
          <div className="Tecnology-Grid">
            {proximTechnologyApi.map((data) => (
              <CardTecnology
                key={data.id}
                image={data?.image}
                name={data?.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
