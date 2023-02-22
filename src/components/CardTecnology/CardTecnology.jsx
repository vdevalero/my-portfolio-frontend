import "./CardTecnology.css";
export function CardTecnology({ image, name }) {
  return (
    <div className="card-Tecnology">
      <img src={image} />
      <p>{name}</p>
    </div>
  );
}