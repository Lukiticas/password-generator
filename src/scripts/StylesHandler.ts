import { meterDescripton, meterFigure, rangeInput } from "./HTMLimports";

const resetMeterbarAndCheckboxeStyles = () => {
  meterDescripton!.textContent = "";
  meterFigure.forEach((el) => {
    const meterBar = el as HTMLDivElement;
    meterBar.style.backgroundColor = "transparent";
    meterBar.style.outlineColor = "var(--wrd300)";
  });
};

const handleRangeInputStyle = (target: HTMLInputElement) => {
  const { min, max, value } = target;
  const newBgSizeValue = ((+value - +min) * 100) / (+max - +min) + "% 100%";
  target.style.backgroundSize = newBgSizeValue;
};

const handleSpanNumberChange = (newValue: string, target: Element) => {
  target.textContent = newValue;
};

document.querySelectorAll("input[type='range']").forEach((input) => {
  handleRangeInputStyle(input as HTMLInputElement);
});

rangeInput!.addEventListener("input", () => {
  handleRangeInputStyle(rangeInput);
});

export { handleSpanNumberChange, resetMeterbarAndCheckboxeStyles };
