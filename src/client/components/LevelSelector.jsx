import { useState } from "react";
import styles from "../stylesheets/LevelSelector.module.css";

const LevelSelector = (props) => {
  const [selectLevel, setSelectLevel] = useState(false);

  const activateLevelSelector = () => {
    setSelectLevel(!selectLevel);
  };

  const changeLevel = (index) => {
    console.log(index);
    // props.setSelectedImage((s) => props.backendData[index]);
    // props.setLevel((l) => index);
  };

  const DisplayLevels = () => {
    if (props.record.length > 1 && selectLevel) {
      return props.record.map((r, index) => (
        <h2
          key={index}
          onClick={
            props.level + 1 === index + 1 ? activateLevelSelector : () => changeLevel(index + 1)
          }
          className={props.level + 1 === index + 1 ? styles.currentLevel : ""}
        >
          Level {index + 1}
        </h2>
      ));
    } else {
      return (
        <h2 onClick={activateLevelSelector} className={styles.currentLevel}>
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
