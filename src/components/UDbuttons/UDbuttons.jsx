import { useState } from "react";
import "./UDbuttons.css";
import { Link } from "react-router-dom";
import { useDelete } from "../../hooks/useDelete.js";
import {
  DeleteButton,
  EditButton,
  CancelButton,
  CloseButton,
} from "../Button/Button.jsx";
import { Modal } from "../Modals/Modal.jsx";
import { CardConfirm } from "../Cards/CardConfirm";
import { CardError } from "../Cards/CardError";
export function UDbuttons({ id, url, redirect, message }) {
  const { deleteElement } = useDelete({ id, adminUrl: url });
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState(null);
  const del = () => {
    deleteElement()
      .then((res) => location.reload())
      .catch((e) => {
        setShowErrorModal(true);
        setError(e);
      });
    setShowModal(false);
  };

  return (
    <div className="CardTechAdminControls">
      <Link to={redirect}>
        <EditButton>Edit</EditButton>
      </Link>

      <DeleteButton
        onClick={() => {
          setShowModal(true);
        }}
      >
        Delete
      </DeleteButton>

      {showModal && (
        <Modal>
          <CardConfirm message={message} />

          <div className="flex-modal">
            <CancelButton onClick={() => setShowModal(false)}>
              Cancel
            </CancelButton>
            <DeleteButton onClick={del}>Delete</DeleteButton>
          </div>
        </Modal>
      )}

      {showErrorModal && (
        <Modal>
          <CardError
            errorServer={error.message}
            serverMessage={error.response.data.message}
          />
          <CloseButton onClick={() => setShowErrorModal(false)}>
            Close
          </CloseButton>
        </Modal>
      )}
    </div>
  );
}
