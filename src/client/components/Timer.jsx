import { useEffect, useState } from "react";
import "../stylesheets/Timer.css";

const Timer = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      props.setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Watch = () => {
    if (props.time < 60) {
      return <p>Time: 00:{props.time < 10 ? "0" + props.time : props.time}</p>;
    } else {
      return (
        <p>
          Time:{" "}
          {Math.floor((props.time % 3600) / 60) < 10
            ? "0" + Math.floor((props.time % 3600) / 60)
            : Math.floor((props.time % 3600) / 60)}
          :{props.time % 60 < 10 ? "0" + (props.time % 60) : props.time % 60}
        </p>
      );
    }
  };

  return <Watch />;
};

export default Timer;
