const TimeKeeper = (props) => {
  if (props.time < 60) {
    return <p>00:{props.time < 10 ? "0" + props.time : props.time}</p>;
  } else {
    return (
      <p>
        {Math.floor((props.time % 3600) / 60) < 10
          ? "0" + Math.floor((props.time % 3600) / 60)
          : Math.floor((props.time % 3600) / 60)}
        :{props.time % 60 < 10 ? "0" + (props.time % 60) : props.time % 60}
      </p>
    );
  }
};

export default TimeKeeper;
