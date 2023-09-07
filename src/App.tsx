import React, { useState } from "react";
import "./styles.css";

import { ColorType, RGBA } from "types/types";
import { toHexCode, toFunctionalRgba } from "utils/utility";

import { ColorSlider, AlphaSlider } from "components/Slider";
import { ColorBox } from "components/ColorBox";
import { ResultColorCode } from "components/ResultColorCode";

export default function App() {
  const [currentColor, setCurrentColor] = useState<RGBA>({
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1,
  });
  function handleChangeSlider(
    event: React.ChangeEvent<HTMLInputElement>,
    color: ColorType
  ) {
    setCurrentColor((prevState) => {
      const newState = { ...prevState };
      newState[color] = Number(event.target.value);
      return newState;
    });
    console.log(currentColor);
  }
  return (
    <div className="App">
      <h1>RGBシミュレーター</h1>
      <ColorSlider
        onChange={(event) => handleChangeSlider(event, "red")}
        colorType="red"
        color={currentColor}
      />
      <ColorSlider
        onChange={(event) => handleChangeSlider(event, "green")}
        colorType="green"
        color={currentColor}
      />
      <ColorSlider
        onChange={(event) => handleChangeSlider(event, "blue")}
        colorType="blue"
        color={currentColor}
      />
      <AlphaSlider
        onChange={(event) => handleChangeSlider(event, "alpha")}
        colorType="alpha"
        color={currentColor}
      />
      <ColorBox color={currentColor} />
      <ResultColorCode color={`${toHexCode(currentColor)}`} />
      <ResultColorCode color={`${toFunctionalRgba(currentColor)}`} />
    </div>
  );
}
