import TimeKeeper from "./TimeKeeper";
import { useEffect } from "react";
import "../stylesheets/Header.css";
import LevelSelector from "./LevelSelector";

const Header = (props) => {
  useEffect(() => {
    let interval;
    if (props.timerRunning) {
      interval = setInterval(() => {
        props.setTime((t) => t + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      clearInterval(interval);
    }
  }, [props.timerRunning]);

  return (
    <header>
      <LevelSelector
        backendData={props.backendData}
        setSelectedImage={props.setSelectedImage}
        level={props.level}
        setLevel={props.setLevel}
        setTime={props.setTime}
        setTimerRunning={props.setTimerRunning}
        record={props.record}
        modal={props.modal}
        waldo={props.waldo}
        newGamePlus={props.newGamePlus}
      />
      <div>
        <p>Time: </p>
        <TimeKeeper time={props.time} />
      </div>
    </header>
  );
};

export default Header;
