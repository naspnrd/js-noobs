let selectedCell = "";
let state = {};
/* 
state : {
  C4: {
    innerText: "Neeraj",
    isBold: true,
    isItalic: true,
    isUnderlined: false,
    align: "center",
    fontSize,
    fontFamily,
    textColor,
    backgroundColor
  },
  B2: {
    innerText: "Neeraj",
    isBold: true,
    isItalic: true,
    isUnderlined: false,
    align: "center",
    fontSize,
    fontFamily,
    textColor,
    backgroundColor
  }
}
*/

const defaultState = {
  innerText: "",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  align: "left",
  fontSize: "16",
  fontFamily: "default",
  textColor: "#000000",
  backgroundColor: "#ffffff",
};

const activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");
const expressionInput = document.getElementById("expression");

expressionInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    try {
      const expressionResult = eval(e.target.value);
      selectedCell.innerText = expressionResult;
      e.target.value = "";
    } catch (error) {
      console.error("Error while evaluating expression: ", error.message);
      selectedCell.innerText = "";
      alert("Invalid expression. Please enter a valid Js expression");
    }
  }
});
form.addEventListener("change", () => {
  console.log("change event triggered");
  if (!selectedCell) {
    alert("Please select a cell before making any change on the options");
    form.reset();
    return;
  }
  // extract the form data based on selection

  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    isBold: form["isBold"].checked,
    isItalic: form["isItalic"].checked,
    isUnderlined: form["isUnderlined"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  };
  state[selectedCell.id] = { ...formData, innerText: selectedCell.innerText };

  console.log({ formData, state });

  applyStylesToSelectedCell(formData);
});

function applyStylesToSelectedCell(styles) {
  // apply the styles to selected cell data
  // hardcoding for explanation purpose
  selectedCell.style.fontSize = styles.fontSize + "px";
  selectedCell.style.fontFamily = styles.fontFamily;
  selectedCell.style.fontWeight = styles.isBold ? "bold" : "normal";
  selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  selectedCell.style.textDecoration = styles.isUnderlined
    ? "underline"
    : "none";
  selectedCell.style.textAlign = styles.align;
  selectedCell.style.textColor = styles.textColor;
  selectedCell.style.backgroundColor = styles.backgroundColor;
}

body.addEventListener("click", (event) => {
  form.reset();
  if (selectedCell) selectedCell.classList.remove("active-cell");
  selectedCell = event.target;
  selectedCell.classList.add("active-cell");
  activeCellElement.innerText = selectedCell.id;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  state[selectedCell.id]["innerText"] = selectedCell.innerText;

  applyCellInfoToForm();
});

body.addEventListener("input", (event) => {
  selectedCell = event.target;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell.innerText,
    };
    return;
  }
  state[selectedCell.id]["innerText"] = selectedCell.innerText;
});

function applyCellInfoToForm() {
  if (!state[selectedCell.id]) {
    form.reset();
    console.log({ defaultState });
    return;
  }

  console.log(state[selectedCell.id]);
  syncFormOptions(state[selectedCell.id]);
}

function syncFormOptions(selectedCellState) {
  console.log(selectedCellState);
  for (let key in selectedCellState) {
    console.log({ key });
    if (key === "isBold" || key === "isItalic" || key === "isUnderlined") {
      form[key].checked = selectedCellState[key];
    } else if (key === "innerText") continue;
    else form[key].value = selectedCellState[key];
  }
}
