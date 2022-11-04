import { ModalContainer } from "./styled";
import {IoCloseOutline} from 'react-icons/io5'


const Modal = () => {
  return (
    <ModalContainer>
      <div className="modal-box">
        <div className="modal-header">
          <span>Modal</span>
          <IoCloseOutline/>
        </div>
        <div className="modal-body">Teste</div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
