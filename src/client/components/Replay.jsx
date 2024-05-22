import "../stylesheets/Replay.css";
import TimeKeeper from "./TimeKeeper";

const Replay = (props) => {
  const replayGame = () => {
    props.setSelectedImage((s) => props.backendData[0]);
    props.setLevel((l) => 0);
    props.setRecord([]);
  };

  return (
    <div className="replay">
      <h1>Congratulations!</h1>
      <button onClick={replayGame}>Play Again?</button>
      {props.record.map((record, index) => (
        <div key={index}>
          <p>Level {index + 1}- </p>
          <TimeKeeper time={record} />
        </div>
      ))}
    </div>
  );
};

export default Replay;
