import "./TechAdmin.css";
import { Link } from "react-router-dom";

//CUSTOM HOOKS
import { useGet } from "../../hooks/useGet.js";
import { PRIVATE, PUBLIC } from "../../api/urls.js";

//component styled
import { CardTecnology } from "../../components/CardTecnology/CardTecnology";
import { UDbuttons } from "../../components/UDbuttons/UDbuttons.jsx";
import { AddButton } from "../../components/Button/Button";
export function TechAdmin() {
  const { response: reqTech } = useGet({ url: PUBLIC.technologies });

  return (
    <div>
      <h2>Tecnologias</h2>
      <div className="ControlPanel">
        <Link to="../NewTech">
          <AddButton>Add Tech +</AddButton>
        </Link>
      </div>
      <div className="TecnologyAdmin-Grid">
        {reqTech.map((data) => (
          <div className="CardTechAdminFlex" key={data?.id}>
            <CardTecnology image={data.image} name={data.name} />
            <UDbuttons
              id={data.id}
              url={PRIVATE.technologies.crud}
              redirect={`../EdithTech/${data.id}`}
              message={` que quieres eliminar esta tecnologia? => ${data.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
