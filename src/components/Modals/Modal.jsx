import "./Modal.css";
import ReactDOM from "react-dom";

export function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal">
          <div className="modalChildren">{children}</div>
        </div>,
        document.getElementById("portal")
      )}
    </>
  );
}
