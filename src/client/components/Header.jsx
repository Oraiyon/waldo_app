import Timer from "./Timer";
import "../stylesheets/Header.css";

const Header = (props) => {
  return (
    <header>
      <h1>Level {props.level + 1}</h1>
      <div>
        <p>Time:</p>
        <Timer time={props.time} setTime={props.setTime} />
      </div>
    </header>
  );
};

export default Header;
