import "./ProjectsAdmin.css";

//link
import { Link } from "react-router-dom";

//CUSTOM HOOKS
import { useGet } from "../../hooks/useGet.js";
import { PUBLIC, PRIVATE } from "../../api/urls.js";
//Component Styled
import { CardProject } from "../../components/CardProject/CardProject.jsx";
import { UDpanel } from "../../components/UDpanel/UDpanel.jsx";
import { AddButton } from "../../components/Button/Button";
export function ProjectsAdmin() {
  const { response: projectsData } = useGet({ url: PUBLIC.projects });
  console.log(projectsData);
  return (
    <div>
      <h2>Projects</h2>

      <div className="ControlPanel">
        <Link to={"../NewProject"}>
          <AddButton>Agree project +</AddButton>
        </Link>
      </div>

      <div className="Grid-Dashboard">
        {projectsData.map((data) => (
          <div className="editCardPlus" key={data.id}>
            <UDpanel
              id={data.id}
              url={PRIVATE.project.crud}
              message={`¿Seguro que quieres eliminar => 
               ${data.title}?`}
            />
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
          </div>
        ))}
      </div>
    </div>
  );
}
