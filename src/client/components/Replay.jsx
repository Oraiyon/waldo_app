import "../stylesheets/Replay.css";

const Replay = (props) => {
  const replayGame = () => {
    props.setSelectedImage((s) => props.backendData[0]);
    props.setLevel((l) => 0);
  };

  if (!props.selectedImage) {
    return (
      <div className="replay">
        <h1>Congratulations!</h1>
        <button onClick={replayGame}>Play Again?</button>
      </div>
    );
  }
};

export default Replay;
