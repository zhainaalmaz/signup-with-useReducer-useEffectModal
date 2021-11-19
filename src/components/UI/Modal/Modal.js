import classes from './Modal.module.css';

export default function ModalOverlay(props) {
  return (
    <>
      <div className={classes.modal}>
        <h1>Are You Sure You Want To Call?</h1>
        <h4>Click YES and wait for an answer...</h4>
        <div>
          <button>
            <a href="https://beeline.kg/ru/">Yes</a>
          </button>
          <button onClick={() => props.closeModal(false)}>No</button>
        </div>
      </div>
    </>
  );
}
