import { ModalContainer } from "./styled";
import { IoCloseOutline } from "react-icons/io5";


const Modal = ({ headerTitle, HeaderBody, closeModal }) => {
  return (
    <ModalContainer
      id="dark-bg"
      onClick={(e) => e.target.id.includes("dark-bg") && closeModal()}
    >
      <div className="modal-box">
        <div className="modal-header">
          <span>{headerTitle}</span>
          <IoCloseOutline onClick={() => closeModal()} />
        </div>
        <div className="modal-body">{HeaderBody}</div>
      </div>
    </ModalContainer>
  );
};

export default Modal;