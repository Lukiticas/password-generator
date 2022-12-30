import { display, meterDescripton, meterFigure } from "./HTMLimports";
import { resetMeterbarAndCheckboxeStyles } from "./StylesHandler";

type ColorRange = 0 | 1 | 2 | 3 | 4;
interface HPCheckboxes extends Object {
  UCL: Boolean;
  LCL: Boolean;
  ICN: Boolean;
  ICS: Boolean;
}

const createPassword = (filters: HPCheckboxes, length: number) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = "";
  let newPassword = "";

  if (filters.UCL) newStr += chars.replace(/[^A-Z]/g, "");
  if (filters.LCL) newStr += chars.replace(/[^a-z]/g, "");
  if (filters.ICN) newStr += chars.replace(/[^\d+]/g, "");
  if (filters.ICS) newStr += chars.match(/[!@#$%^&*()]/g)?.join("");

  for (let i = 0; i <= length; i++) {
    const randomNumber = Math.floor(Math.random() * newStr.length);
    newPassword += newStr.substring(randomNumber, randomNumber + 1);
  }

  return newPassword;
};

const handlePasswordStrength = (level: ColorRange) => {
  resetMeterbarAndCheckboxeStyles();

  const meterValues = {
    "0": ["transparent", ""],
    "1": ["#e04450", "Super Weak"],
    "2": ["#5d3782", "Weak"],
    "3": ["#f8cb67", "Medium"],
    "4": ["#a3ffab", "Good"],
  };
  const score = meterValues[`${level}`];

  meterDescripton!.textContent = score[1];

  meterFigure.forEach((el, idx) => {
    if (idx >= level) return;
    const meterBar = el as HTMLDivElement;
    meterBar.style.backgroundColor = score[0];
    meterBar.style.outlineColor = level == 0 ? "var(--wrd300)" : score[0];
  });
};

const passwordHandler = () => {
  let radioValue = 10;
  let checkBoxes = { UCL: false, LCL: false, ICN: false, ICS: false };

  const updatePasswordStrength = () => {
    const checkboxesScore = Object.values(checkBoxes).filter((el) => el).length;
    let AllScore = Math.ceil((radioValue * checkboxesScore) / 10);
    AllScore = AllScore > 4 ? 4 : AllScore;
    handlePasswordStrength(AllScore as ColorRange);
  };

  const handleRadioValueChange = (newRadioValue: number) => {
    radioValue = newRadioValue;
  };

  const handleCheckBoxChange = (target: HTMLInputElement) => {
    const newCheckboxes = { [target.id]: target.checked };
    checkBoxes = { ...checkBoxes, ...newCheckboxes };
  };

  const handleDisplayPassword = () => {
    const defaultValue = "PASSWORD!";
    const newPassword = createPassword(checkBoxes, radioValue);

    if (radioValue > 0) {
      display.classList.add("enabled");
      display.textContent = newPassword;
    } else {
      display.classList.remove("enabled");
      display.textContent = defaultValue;
    }
  };

  return {
    handleRadioValueChange,
    handleCheckBoxChange,
    updatePasswordStrength,
    handleDisplayPassword,
  };
};

export { passwordHandler };
