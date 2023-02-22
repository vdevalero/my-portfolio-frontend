import "./ProximTechAdmin.css";
import { Link } from "react-router-dom";

//CUSTOM HOOKS
import { useGet } from "../../hooks/useGet";

import { PUBLIC, PRIVATE } from "../../api/urls";
//component styled
import { CardTecnology } from "../../components/CardTecnology/CardTecnology";
import { UDbuttons } from "../../components/UDbuttons/UDbuttons.jsx";
import { AddButton } from "../../components/Button/Button.jsx";
export function ProximTechAdmin() {
  const { response: reqTech } = useGet({ url: PUBLIC.proximTechnology });

  return (
    <div>
      <h2>Proximas Tecnologias</h2>
      <div className="ControlPanel">
        <Link to="../NewProximTech">
          <AddButton className="agreeProject">Add Next Tech +</AddButton>
        </Link>
      </div>
      <div className="TecnologyAdmin-Grid">
        {reqTech.map((data) => (
          <div className="CardTechAdminFlex" key={data.id}>
            <CardTecnology image={data.image} name={data.name} />
            <UDbuttons
              id={data.id}
              url={PRIVATE.proximTechnology.crud}
              redirect={`../EdithProximTech/${data.id}`}
              message={`¿Seguro que quieres eliminar la next Tech? => ${data.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
