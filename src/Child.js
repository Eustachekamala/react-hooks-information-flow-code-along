import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newChildColor = getRandomColor();
    onChangeColor(newChildColor);
  }
  return <div onClick = {handleClick} className="child" style={{ backgroundColor: color }}></div>;
}

export default Child;
