import { useEffect, useState } from "react";
import "../stylesheets/Timer.css";

const Timer = (props) => {
  const [time, setTime] = useState(55);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // Fix timer
  return (
    <header>
      <h1>Level {props.level + 1}</h1>
      <p>
        Time: {time <= 60 ? "00:" + time : "0" + Math.floor((time % 3600) / 60) + ":" + (time % 60)}
      </p>
    </header>
  );
};

export default Timer;
