import TimeKeeper from "./TimeKeeper";
import "../stylesheets/Modal.css";

const Modal = (props) => {
  const goToNextLevel = () => {
    props.setSelectedImage((s) => props.backendData[props.level + 1]);
    props.setLevel((l) => l + 1);
    props.setTime((t) => 0);
    props.setRecord((r) => {
      if (r.length) {
        return [...r, props.time];
      } else {
        return [props.time];
      }
    });
    props.setTimerRunning(true);
    props.modal.style.display = "none";
    props.waldo.classList.toggle("inactive");
  };

  return (
    <div className="modal">
      <h2>You Found Waldo!</h2>
      <div>
        <p>Time: </p>
        <TimeKeeper time={props.time} />
      </div>
      <button onClick={goToNextLevel}>Next Level</button>
    </div>
  );
};

export default Modal;
