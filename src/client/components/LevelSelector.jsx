import { useState } from "react";
import styles from "../stylesheets/LevelSelector.module.css";

const LevelSelector = (props) => {
  const [selectLevel, setSelectLevel] = useState(false);

  const activateLevelSelector = () => {
    setSelectLevel(!selectLevel);
  };

  const Level = (props) => {
    return <h2 className={selectLevel ? styles.level : styles.level_hidden}>Level {props.i}</h2>;
  };

  const DisplayLevels = () => {
    if (props.record.length && selectLevel) {
      for (let i = 0; i < props.record; i++) {
        return <Level i={i + 1} />;
      }
    }
  };

  return (
    <div className={styles.LevelSelector}>
      <h2 onClick={activateLevelSelector}>Level {props.level + 1}</h2>
      <DisplayLevels />
    </div>
  );
};

export default LevelSelector;
