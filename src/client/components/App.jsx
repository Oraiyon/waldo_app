import "../stylesheets/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
  );
}

export default App;
