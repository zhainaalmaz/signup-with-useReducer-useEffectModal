import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

const ModalOverlay = (props) => {
  return (
    <>
      <div className={classes.moda}>
        <div className={classes.content}>Are You Sure You Want To Call?</div>
      </div>
      <div>
        <button onClick={props.onDelete}>Yes</button>
        <button onClick={props.onCancel}>No</button>
      </div>
    </>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
