import { useEffect, useState } from "react";
import "../stylesheets/Home.css";
import Replay from "./Replay";
import Header from "./Header";

const Home = () => {
  const [backendData, setBackendData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(0);
  const [record, setRecord] = useState([]);

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
    return <p>No Images</p>;
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
      setSelectedImage((s) => backendData[level + 1]);
      setLevel((l) => l + 1);
      setRecord((r) => [...r, time]);
      setTime((t) => 0);
    } else {
      console.log(`${x}, ${y}`);
    }
  };

  return (
    <>
      <Header level={level} time={time} setTime={setTime} />
      <img src={selectedImage.url} alt={selectedImage.name} onClick={findWaldo} />
    </>
  );
};

export default Home;
