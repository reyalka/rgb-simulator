import React, { ChangeEvent } from "react";
import { ColorType, RGBA } from "types/types";
import { toFunctionalRgba } from "utils/utility";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  color: RGBA;
  colorType: ColorType;
}
export function ColorSlider({ onChange, color, colorType }: Props) {
  const startColor = { ...color };
  const endColor = { ...color };
  startColor[colorType] = 0;
  endColor[colorType] = 255;
  return (
    <>
      <input
        type="range"
        max={255}
        min={0}
        defaultValue={0}
        onChange={onChange}
        style={{
          appearance: "none",
          // TODO: コミット時に改行を修正(prettierのせい)
          background: `linear-gradient(90deg,${toFunctionalRgba(
            startColor
          )},${toFunctionalRgba(endColor)})`,
          marginBottom: "15px",
          height: "30px",
          width: "300px",
          boxShadow: "0px 0px 23px 5px rgba(0, 0, 0, 0.16)",
          borderRadius: "15px",
        }}
      />
      <br />
    </>
  );
}

export function AlphaSlider({ onChange, color }: Props) {
  return (
    <>
      <input
        type="range"
        onChange={onChange}
        max={1}
        min={0}
        step={0.01}
        style={{ width: "300px" }}
      />
      <br />
    </>
  );
}
