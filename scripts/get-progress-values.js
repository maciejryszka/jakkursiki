const progressValues = [];

const dataUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSfdzQpjvTzGXL-no5E4jKRVnF8POoaTzmE5TO2fFgHDTPWoOL8b2qJLjNFRm6HRHopTEF6IF6TBFE9/pubhtml';

await fetch(dataUrl)
  .then(response => response.text())
  .then(function(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    progressValues.push(Number(doc.body.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerText));
    progressValues.push(Number(doc.body.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2].innerText));
    progressValues.push(Number(doc.body.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[3].innerText));
  })
  .catch(error => console.error('Error fetching data:', error));

console.log(progressValues);

  export {progressValues};