import "../stylesheets/Modal.css";

const Modal = (props) => {
  const goToNextLevel = () => {
    props.setSelectedImage((s) => props.backendData[props.level + 1]);
    props.setLevel((l) => l + 1);
    props.setTime((t) => 0);
    props.setRunning(true);
    props.modal.style.display = "none";
  };

  return (
    <div className="modal">
      <button onClick={goToNextLevel}>Continue</button>
    </div>
  );
};

export default Modal;
