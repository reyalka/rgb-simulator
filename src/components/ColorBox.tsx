import React from "react";
import { RGBA } from "types/types";
import { toFunctionalRgba } from "utils/utility";

export function ColorBox({ color }: { color: RGBA }) {
  return (
    <div
      style={{
        backgroundColor: toFunctionalRgba(color),
        height: "100px",
        width: "30%",
        boxShadow:
          "0px 0px 15px 0px rgba(0,0,0,20%)",
        margin: "0 auto",
        marginTop: "30px",
        borderRadius: "10px"
      }}
    />
  );
}
