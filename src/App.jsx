import { useState } from "react";
import "./App.css";

const Swatch = ({ color, setSelectedColor }) => {
  return (
    <li
      className={color}
      onClick={() => {
        setSelectedColor(color);
      }}
    ></li>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div id="container">
      <header>
        <dl>
          <dt>Currently selected color: </dt>
          <dd className={selectedColor}>{selectedColor}</dd>
        </dl>
      </header>
      <menu className="colors">
        <Swatch color="yellow" setSelectedColor={setSelectedColor} />
        <Swatch color="green" setSelectedColor={setSelectedColor} />
        <Swatch color="black" setSelectedColor={setSelectedColor} />
      </menu>
    </div>
  );
};

export default App;