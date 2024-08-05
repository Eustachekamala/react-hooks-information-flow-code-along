import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [colorChild, setColorChild] = useState("#FFF");

  function handleColorChange(newChildColor) {
    const newColor = getRandomColor();
    setColorChild(newChildColor);
    setColor(newColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={colorChild} onChangeColor={handleColorChange} />
      <Child color={colorChild} onChangeColor={handleColorChange} />
    </div>
  );
}

export default Parent;
