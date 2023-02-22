import "./States.css";
import { Link } from "react-router-dom";
//CUSTOM HOOK
import { useGet } from "../../hooks/useGet";
import { PRIVATE, PUBLIC } from "../../api/urls";
//Styled Component
import { StateProject } from "../../components/StateProject/StateProject";
import { UDbuttons } from "../../components/UDbuttons/UDbuttons";
import { AddButton } from "../../components/Button/Button.jsx";
export function States() {
  const { response } = useGet({ url: PUBLIC.stateProject });
  return (
    <div>
      <h2>States Page</h2>
      <div className="ControlPanel">
        <Link to="../NewState">
          <AddButton>Add State +</AddButton>
        </Link>
      </div>
      <div className="TecnologyAdmin-Grid">
        {response.map((data) => (
          <div className="CardTechAdminFlex">
            <StateProject
              border={data.border_color}
              background={data.background_color}
            >
              {data.name}
            </StateProject>
            <UDbuttons
              id={data.id}
              url={PRIVATE.stateProject.crud}
              redirect={`../EdithState/${data.id}`}
              message={`¿Seguro que quieres eliminar el estado? => ${data.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
