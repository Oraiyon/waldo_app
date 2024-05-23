import "../stylesheets/StartScreen.css";

const StartScreen = (props) => {
  const start = () => {
    props.setStartGame(true);
    props.setTimerRunning(true);
  };

  return (
    <>
      <h1>Where's Waldo?</h1>
      <button onClick={start}>Start Game</button>
    </>
  );
};

export default StartScreen;
