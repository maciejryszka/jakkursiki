import { progressValues, lastEditedValues } from "./get-progress-values-and-last-edit-values.js";

const percentageProgresses = progressValues.map((value) => value * 100);
const progressValueElements = document.querySelectorAll(".course__progress-value");

progressValueElements.forEach((el, index) => {
  progressValueElements[index].innerText = `${percentageProgresses[index]}%`;
});

const lastEditElements = document.querySelectorAll(".course__last-edit");
console.log(lastEditElements);

lastEditElements.forEach((el, index) => {
  lastEditElements[index].innerText = `Ostatni postęp: ${lastEditedValues[index]}`;
});
