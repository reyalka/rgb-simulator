import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

import { copyToClipboard } from "utils/utility";

export function ResultColorCode({ color }: { color: string }) {
  const [isCopyied, setIsCopied] = useState(false);

  function handleCopyButtonClick() {
    copyToClipboard(color, {
      // FaCheckに変更して、3秒後にFaCopyに戻す
      onSucsess: () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      },
      onFailure: () => {
        alert("コピーに失敗しました");
      },
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "30px",
          height: "40px",
          padding: "5px",
          border: `10px solid ${color}`,
          borderRadius: "10px 0 0 10px ",
        }}
      >
        {color}
      </p>
      <button
        onClick={handleCopyButtonClick}
        style={{
          borderRadius: "0 10px 10px 0",
          height: "70px",
          padding: "5px",
          border: `10px solid ${color}`,
          borderLeft: "0",
        }}
      >
        {isCopyied ? <FaCheck size={30} /> : <FaCopy size={30} />}
      </button>
    </div>
  );
}
