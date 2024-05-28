import "../stylesheets/Replay.css";
import ScoreBoard from "./Scoreboard";

const Replay = (props) => {
  const replayGame = () => {
    props.setSelectedImage((s) => props.backendData[0]);
    props.setLevel((l) => 0);
    props.setNewGamePlus(true);
  };

  return (
    <div className="replay">
      <h1>Congratulations!</h1>
      <button onClick={replayGame}>Play Again?</button>
      <ScoreBoard record={props.record} />
    </div>
  );
};

export default Replay;
