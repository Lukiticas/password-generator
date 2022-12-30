const meterFigure = document.querySelectorAll(
  ".meter__figure__description--img"
);
const meterDescripton = document.querySelector(".meter__figure__description");
const listOfCheckboxes = document.querySelectorAll("input[name='include']");
const spanNumber = document.querySelector(".range-label__span-number")!;
const display = document.querySelector(".app-input__display") as HTMLDivElement;
const createPasswordBtn = document.querySelector(".password-create-button")!;
const rangeInput = document.querySelector(".range")! as HTMLInputElement;
const cpBtn = document.querySelector(".app-input__cp-parent")!;
export {
  createPasswordBtn,
  listOfCheckboxes,
  meterDescripton,
  meterFigure,
  rangeInput,
  spanNumber,
  display,
  cpBtn,
};
