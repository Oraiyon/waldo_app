import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Form.css";

const Form = () => {
  const [coordinates, setCoordinates] = useState(["", ""]);

  const showPreview = (e) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(e.target.files[0]);
    // Avoids memory leaks
    output.onload = () => URL.revokeObjectURL(output.src);
  };

  const selectCoordinates = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const x = Math.round((e.nativeEvent.offsetX / width) * 100);
    const y = Math.round((e.nativeEvent.offsetY / height) * 100);
    const topLeftInput = document.getElementById("top_left");
    const bottomRightInput = document.getElementById("bottom_right");
    if (topLeftInput.checked) {
      const newArray = [[x, y], coordinates[1]];
      setCoordinates(newArray);
    } else if (bottomRightInput.checked) {
      const newArray = [coordinates[0], [x, y]];
      setCoordinates(newArray);
    } else {
      console.log("Select a coordinate type");
    }
  };

  const manualSelectCoordinates = (e) => {
    let newArray;
    if (e.target.name === "top_left") {
      newArray = [[e.target.value], coordinates[1]];
    } else {
      newArray = [coordinates[0], [e.target.value]];
    }
    setCoordinates(newArray);
  };

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Upload Image</h1>
      <form action="" method="post" encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={showPreview} required />
        <label htmlFor="top_left">Top Left: </label>
        <div>
          <input type="radio" id="top_left" name="coordinate" defaultChecked={true} />
          <input
            type="text"
            name="top_left"
            value={coordinates[0]}
            onChange={manualSelectCoordinates}
          />
        </div>
        <label htmlFor="bottom_right">Bottom Right: </label>
        <div>
          <input type="radio" id="bottom_right" name="coordinate" />
          <input
            type="text"
            name="bottom_right"
            value={coordinates[1]}
            onChange={manualSelectCoordinates}
          />
        </div>
        <button>Submit</button>
      </form>
      <img id="output" onClick={selectCoordinates} />
    </>
  );
};

export default Form;
