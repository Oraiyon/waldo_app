import { useState } from "react";
import "../stylesheets/Form.css";

const Form = () => {
  const [preview, setPreview] = useState(null);

  const showPreview = (e) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(e.target.files[0]);
    // Avoids memory leaks
    output.onload = () => URL.revokeObjectURL(output.src);
  };

  return (
    <>
      <h1>Upload Image</h1>
      <form action="" method="post" encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={showPreview} />
        <label htmlFor="top_left">Top Left:</label>
        <input type="text" name="top_left" />
        <label htmlFor="bottom_right">Bottom Right:</label>
        <input type="text" name="bottom_right" />
        <button>Submit</button>
      </form>
      <img id="output" />
    </>
  );
};

export default Form;
