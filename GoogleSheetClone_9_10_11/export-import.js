const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state)], { type: "application/json" });
  let url = URL.createObjectURL(blob);
  console.log(url);
  let link = document.createElement("a");
  link.href = url;
  link.download = "spreadsheet.json";
  link.click();
});

upload.addEventListener("change", (e) => {
  let file = e.target.files[0];
  console.log({ file });
  if (file.type !== "application/json") {
    alert("Please upload json file only");
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const fileData = JSON.parse(event.target.result);
    console.log(fileData);

    // HW: Fill all the cells of the sheet with the fileData
  };

  fileReader.readAsText(file);
});

// HW: Implement multisheet functionality

/* 
AllSheets = {
sheet1: state1,
sheet2: state2,
sheet3: state3
so on....
}

every sheet is like a radio button because you can select only one at a time out of all
given sheets
*/
