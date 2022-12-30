import {
  cpBtn,
  createPasswordBtn,
  display,
  listOfCheckboxes,
  rangeInput,
  spanNumber,
} from "./HTMLimports";
import { handleSpanNumberChange } from "./StylesHandler.js";
import { passwordHandler } from "./passwordHandler";
import "./StylesHandler.ts";

const PH = passwordHandler();

rangeInput!.addEventListener("input", () => {
  handleSpanNumberChange(rangeInput.value, spanNumber);
  PH.handleRadioValueChange(Number(rangeInput.value));
  PH.updatePasswordStrength();
});

listOfCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", ({ target }) => {
    PH.handleCheckBoxChange(target as HTMLInputElement);
    PH.updatePasswordStrength();
  });
});

createPasswordBtn.addEventListener("click", () => PH.handleDisplayPassword());

cpBtn.addEventListener("click", () => {
  const selection = window.getSelection();
  if (selection != null) {
    selection.selectAllChildren(display);
  } else {
    console.log("not able to select text :9");
  }
});

export {};
