import "./ProjectsPage.css";

//CUSTOM HOOKS
import { useGet } from "../../hooks/useGet.js";
import { PUBLIC } from "../../api/urls";
//Component Styled
import { CardProject } from "../../components/CardProject/CardProject.jsx";

export function ProjectsPage() {
  const { response: projectsApi } = useGet({ url: PUBLIC.projects });
  return (
    <div>
      <div className="Proyectos">
        <h2>Proyectos</h2>
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
      </div>
    </div>
  );
}
