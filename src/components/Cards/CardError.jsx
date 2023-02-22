import "./Card.css";
export function CardError({ errorServer, serverMessage }) {
  return (
    <div className="cardError">
      <h2>ERROR</h2>
      <div>
        <h3>Error del servidor</h3>
        <p>{errorServer}</p>
        <h3>Mensaje del servidor:</h3>
        <p>{serverMessage}</p>
      </div>
    </div>
  );
}
