import { useState } from "react";
import styles from "../stylesheets/LevelSelector.module.css";

const LevelSelector = (props) => {
  const [selectLevel, setSelectLevel] = useState(false);

  const changeLevel = (index) => {
    props.modal.style.display = "none";
    props.waldo.classList.remove("inactive");
    props.setSelectedImage((s) => props.backendData[index]);
    props.setLevel((l) => index);
    props.setTime(0);
    props.setTimerRunning(true);
    setSelectLevel(false);
  };

  const DisplayLevels = () => {
    if (props.newGamePlus && selectLevel) {
      return props.record.map((r, index) => (
        <h2
          key={index}
          onClick={
            props.level + 1 === index + 1
              ? () => setSelectLevel(!selectLevel)
              : () => changeLevel(index)
          }
          className={props.level + 1 === index + 1 ? styles.currentLevel : ""}
        >
          Level {index + 1}
        </h2>
      ));
    } else {
      return (
        <h2 onClick={() => setSelectLevel(!selectLevel)} className={styles.currentLevel}>
          Level {props.level + 1}
        </h2>
      );
    }
  };

  return (
    <div className={styles.LevelSelector}>
      <DisplayLevels />
    </div>
  );
};

export default LevelSelector;
