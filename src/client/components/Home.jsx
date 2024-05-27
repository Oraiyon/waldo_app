import { useEffect, useState } from "react";
import "../stylesheets/Home.css";
import Replay from "./Replay";
import Header from "./Header";
import Modal from "./Modal";
import StartScreen from "./StartScreen";

const Home = () => {
  const [backendData, setBackendData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(0);
  const [record, setRecord] = useState([]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const modal = document.querySelector(".modal");
  const waldo = document.querySelector(".waldo");

  useEffect(() => {
    fetch("http://localhost:3000/api/image")
      .then((res) => res.json())
      .then((data) => {
        setBackendData((b) => data);
        setSelectedImage((s) => data[level]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!backendData || !backendData.length) {
    return <p>Loading...</p>;
  }

  if (!selectedImage) {
    return (
      <Replay
        backendData={backendData}
        setSelectedImage={setSelectedImage}
        setLevel={setLevel}
        record={record}
        setRecord={setRecord}
      />
    );
  }

  const findWaldo = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const x = Math.round((e.nativeEvent.offsetX / width) * 100);
    const y = Math.round((e.nativeEvent.offsetY / height) * 100);
    if (
      x >= selectedImage.coordinates[0][0] &&
      y >= selectedImage.coordinates[0][1] &&
      x <= selectedImage.coordinates[1][0] &&
      y <= selectedImage.coordinates[1][1]
    ) {
      setTimerRunning(false);
      setRecord((r) => {
        if (r.length) {
          const newArray = record;
          newArray[level] = time;
          return newArray;
        } else {
          return [time];
        }
      });
      modal.style.display = "flex";
      waldo.classList.toggle("inactive");
    } else {
      // Change?
      console.log(`${x}, ${y}`);
    }
  };

  if (startGame) {
    return (
      <>
        <Header
          level={level}
          time={time}
          setTime={setTime}
          timerRunning={timerRunning}
          record={record}
          //
          backendData={backendData}
          setSelectedImage={setSelectedImage}
          setLevel={setLevel}
          modal={modal}
          waldo={waldo}
          setTimerRunning={setTimerRunning}
        />
        <div className="main">
          <img
            className="waldo"
            src={selectedImage.url}
            alt={selectedImage.name}
            onClick={findWaldo}
          />
          <Modal
            modal={modal}
            waldo={waldo}
            backendData={backendData}
            setSelectedImage={setSelectedImage}
            level={level}
            setLevel={setLevel}
            time={time}
            setTime={setTime}
            setTimerRunning={setTimerRunning}
          />
        </div>
      </>
    );
  } else {
    return <StartScreen setStartGame={setStartGame} setTimerRunning={setTimerRunning} />;
  }
};

export default Home;
