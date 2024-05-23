import "../stylesheets/StartScreen.css";
import waldo_waving from "../assets/waldo_waving.jpg";

const StartScreen = (props) => {
  const start = () => {
    props.setStartGame(true);
    props.setTimerRunning(true);
  };

  return (
    <div className="start_screen">
      <h1>Where's Waldo?</h1>
      <button onClick={start}>Start Game</button>
      <img src={waldo_waving} alt="Waldo Waving" />
    </div>
  );
};

export default StartScreen;
