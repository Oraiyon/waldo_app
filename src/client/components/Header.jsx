import Timer from "./Timer";
import TimeKeeper from "./TimeKeeper";
import { useEffect } from "react";
import "../stylesheets/Header.css";

const Header = (props) => {
  useEffect(() => {
    let interval;
    if (props.running) {
      interval = setInterval(() => {
        props.setTime((t) => t + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      clearInterval(interval);
    }
  }, [props.running]);

  return (
    <header>
      <h1>Level {props.level + 1}</h1>
      <div>
        <p>Time: </p>
        <TimeKeeper time={props.time} />
      </div>
    </header>
  );
};

export default Header;
