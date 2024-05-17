import { useEffect, useState } from "react";
import "../stylesheets/Home.css";

const Home = () => {
  const [backendData, setBackendData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [level, setLevel] = useState(0);

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

  const replay = () => {
    setSelectedImage((s) => backendData[0]);
    setLevel((l) => 0);
  };

  if (!selectedImage) {
    return (
      <>
        <h1>Congratulations!</h1>
        <button onClick={replay}>Play Again?</button>
      </>
    );
  }

  const getCoordinates = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const x = Math.round((e.nativeEvent.offsetX / width) * 100);
    const y = Math.round((e.nativeEvent.offsetY / height) * 100);
    if (
      x >= selectedImage.coordinates[0][0] &&
      y >= selectedImage.coordinates[0][1] &&
      x <= selectedImage.coordinates[1][0] &&
      y <= selectedImage.coordinates[1][1]
    ) {
      console.log(`FOUND WALDO at ${x}, ${y}`);
      setSelectedImage((s) => backendData[level + 1]);
      setLevel((l) => l + 1);
    } else {
      console.log(`${x}, ${y}`);
    }
  };

  return (
    <>
      <h1>Level {level + 1}</h1>
      <img src={selectedImage.url} alt={selectedImage.name} onClick={getCoordinates} />
    </>
  );
};

export default Home;
