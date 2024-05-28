import TimeKeeper from "./TimeKeeper";
import styles from "../stylesheets/Scoreboard.module.css";

const ScoreBoard = (props) => {
  return (
    <>
      {props.record.map((record, index) => (
        <div className={styles.record} key={index}>
          <p>Level {index + 1}- </p>
          <TimeKeeper time={record} />
        </div>
      ))}
    </>
  );
};

export default ScoreBoard;
