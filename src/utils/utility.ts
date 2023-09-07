import { RGBA } from "types/types";

export function toFunctionalRgba(color: RGBA): string {
  return `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
}

export function toHexCode(color: RGBA): string {
  function toHex(num: number): string {
    return num.toString(16).padStart(2, "0");
  }
  return `#${toHex(color.red)}${toHex(color.green)}${toHex(color.blue)}`;
}

export function copyToClipboard(
  text: string,
  onSucceeded?: () => void
): void {
  navigator.clipboard.writeText(text).then(
    // sucsess
    () => {
      onSucceeded();
    },
    // failed
    (err) => {
      console.error(err, ": could not copy to clipboard");
    }
  );
}
