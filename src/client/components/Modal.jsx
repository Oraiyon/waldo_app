import ScoreBoard from "./Scoreboard";
import "../stylesheets/Modal.css";

const Modal = (props) => {
  const goToNextLevel = () => {
    props.setSelectedImage((s) => props.backendData[props.level + 1]);
    props.setLevel((l) => l + 1);
    props.setTime(0);
    props.setTimerRunning(true);
    props.modal.style.display = "none";
    props.waldo.classList.toggle("inactive");
  };

  const GoToEnd = () => {
    if (props.newGamePlus) {
      return <button onClick={() => props.setSelectedImage(null)}>Scoreboard</button>;
    }
  };

  return (
    <div className="modal">
      <h2>You Found Waldo!</h2>
      <ScoreBoard record={props.record} />
      <button onClick={goToNextLevel}>Next Level</button>
      <GoToEnd />
    </div>
  );
};

export default Modal;
