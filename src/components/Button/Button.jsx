import "./Button.css";

export function DeleteButton({ children, onClick }) {
  return (
    <button className="DeleteButton" onClick={onClick}>
      {children}
    </button>
  );
}
export function EditButton({ children, onClick }) {
  return (
    <button className="EditButton" onClick={onClick}>
      {children}
    </button>
  );
}
export function AddButton({ children, onClick }) {
  return (
    <button className="AddButton" onClick={onClick}>
      {children}
    </button>
  );
}
export function CancelButton({ children, onClick }) {
  return (
    <button className="CancelButton" onClick={onClick}>
      {children}
    </button>
  );
}
export function CloseButton({ children, onClick }) {
  return (
    <button className="CloseButton" onClick={onClick}>
      {children}
    </button>
  );
}
