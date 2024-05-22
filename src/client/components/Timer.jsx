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

  const Watch = () => {
    if (time < 60) {
      return <p>Time: 00:{time}</p>;
    } else {
      return (
        <p>
          Time:{" "}
          {Math.floor((time % 3600) / 60) < 10
            ? "0" + Math.floor((time % 3600) / 60)
            : Math.floor((time % 3600) / 60)}
          :{time % 60 < 10 ? "0" + (time % 60) : time % 60}
        </p>
      );
    }
  };

  return (
    <header>
      <h1>Level {props.level + 1}</h1>
      <Watch />
    </header>
  );
};

export default Timer;
