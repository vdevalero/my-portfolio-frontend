import "./CardProject.css";
import { StateProject } from "../StateProject/StateProject";
export function CardProject({
  key,
  title,
  image,
  description,
  uriProject,
  uriRepository,
  name,
  border,
  background,
}) {
  return (
    <div className="card-Proyectos" key={key}>
      <div className="proyectos-img-container">
        <img src={image} />
        <div className="StateContainer">
          <StateProject def border={border} background={background}>
            {name}
          </StateProject>
        </div>
      </div>

      <div className="card-info-head">
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
      <div className="Proyectos-Buttons-Flex">
        <a href={uriProject} target="_blank">
          <button className="ver">Ver...</button>
        </a>
        <a href={uriRepository} target="_blank">
          <button className="repository">Repository...</button>
        </a>
      </div>
    </div>
  );
}
