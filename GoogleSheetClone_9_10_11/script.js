const headRow = document.querySelector(".head-row");
const headCol = document.querySelector(".serialNo");
const body = document.querySelector(".body");
const rows = 500,
  columns = 27;

(() => {
  for (let i = 0; i < columns; i++) {
    const headCell = document.createElement("div");
    if (i === 0) {
      // headRow.appendChild(headCell);
      continue;
    }

    headCell.innerText = String.fromCharCode(i + 64); // A(65), B(66), C(67), D(68)
    headCell.classList.add("col-head");
    headRow.appendChild(headCell);
  }
})();

(() => {
  for (let i = 0; i < rows; i++) {
    const headColCell = document.createElement("div");
    headColCell.innerText = i + 1;
    headColCell.classList.add("sno-cell");
    headCol.appendChild(headColCell);
  }
})();

(() => {
  for (let row = 1; row <= rows; row++) {
    const rowCells = document.createElement("div");
    rowCells.classList.add("row");
    for (let col = 1; col < columns; col++) {
      const colCell = document.createElement("cite");
      colCell.contentEditable = true;
      colCell.classList.add("cell");
      rowCells.appendChild(colCell);
      colCell.setAttribute("id", `${String.fromCharCode(64 + col)}${row}`);
      // not the best way
      // colCell.addEventListener("focus", (event) => {
      //   console.log("focused");
      // });
    }
    body.appendChild(rowCells);
  }
})();
