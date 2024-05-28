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
      <h1>New Game+ unlocked!</h1>
      <p>New Game+ allows you to select specific levels and improve your level times.</p>
      <p>To select a level, click on your current level (colored red).</p>
      <h3>Your Times:</h3>
      <ScoreBoard record={props.record} />
      <button onClick={replayGame}>Enter New Game+</button>
    </div>
  );
};

export default Replay;
