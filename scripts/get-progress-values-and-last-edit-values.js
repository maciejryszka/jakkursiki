const progressValues = [];
const lastEditedValues = [];

let docex;
const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfdzQpjvTzGXL-no5E4jKRVnF8POoaTzmE5TO2fFgHDTPWoOL8b2qJLjNFRm6HRHopTEF6IF6TBFE9/pubhtml";

await fetch(dataUrl)
  .then((response) => response.text())
  .then(function (html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const progressesArray = doc.body.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1];
    const lastEditedArray = doc.body.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2];

    for (let i = 2; i < progressesArray.childNodes.length; i++) {
      progressValues.push(Number(progressesArray.childNodes[i].innerText));
    }

    for (let i = 2; i < lastEditedArray.childNodes.length; i++) {
      lastEditedValues.push(lastEditedArray.childNodes[i].innerText);
    }
  })
  .catch((error) => console.error("Error fetching data:", error));

export { progressValues, lastEditedValues };
