import "./UDpanel.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDelete } from "../../hooks/useDelete.js";
import {
  DeleteButton,
  EditButton,
  CancelButton,
  CloseButton,
} from "../Button/Button";
//
import { Modal } from "../Modals/Modal";
import { CardError } from "../Cards/CardError";
import { CardConfirm } from "../Cards/CardConfirm";
export function UDpanel({ id, url, message }) {
  const { deleteElement } = useDelete({ id, adminUrl: url });
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [error, setError] = useState(null);
  console.log();
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
    <div className="editCardControls">
      <Link to={`../EdithProject/${id}`}>
        <EditButton>Edit</EditButton>
      </Link>
      <DeleteButton onClick={() => setShowModal(true)}>Delete</DeleteButton>
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
