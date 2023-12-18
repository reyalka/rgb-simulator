import { RGBA } from "types/types";

// RGBA型を"rgba(RR,GG,BB,AA)"に変換
export function toFunctionalRgba(color: RGBA): string {
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
}

// RGBA型を"#RRGGBB"に変換（Aは使用しない）
export function toHexCode(color: RGBA): string {
  function toHex(num: number): string {
    return num.toString(16).padStart(2, "0");
  }
  return `#${toHex(color.red)}${toHex(color.green)}${toHex(color.blue)}`;
}

// クリップボードにテキストをコピーする
interface Handler {
  onSucsess?: () => void;
  onFailure?: (err: Error) => void;
}
export function copyToClipboard(text: string, handler: Handler = {}): void {
  const {
    onSucsess = () => console.log("Copied!"),
    onFailure = (error) => console.error("Copy failed: ", error),
  } = handler;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      onSucsess();
    })
    .catch((error) => {
      onFailure(error);
    });
}
