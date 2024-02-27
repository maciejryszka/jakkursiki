import { progressValues, lastEditedValues } from "./get-progress-values-and-last-edit-values.js";

// imported values comes as floats, but percentage values are required (e.g. 55 instead of 0.55)
const percentageProgresses = progressValues.map((value) => value * 100);

// -------------------- Update of progress bars --------------------

const progressbars = document.querySelectorAll(".course__progressbar--js");

const changeProgress = (progress, bar) => {
  bar.style.width = `${progress}%`;
};

for (let i = 0; i < progressbars.length; i++) {
  changeProgress(percentageProgresses[i], progressbars[i]);
}

// -------------------- Update of progress descriptions --------------------

const progressValueElements = document.querySelectorAll(".course__progress-value");

progressValueElements.forEach((el, index) => {
  progressValueElements[index].innerText = `${percentageProgresses[index]}%`;
});

const lastEditElements = document.querySelectorAll(".course__last-edit");

lastEditElements.forEach((el, index) => {
  lastEditElements[index].innerText = `Ostatni postęp: ${lastEditedValues[index]}`;
});

// Both above updates had to be done in one JS file, because Safari browser reads properly only the first JS file includes in HTML body.
// Data from second JS file were fetched as 'undefined'.

// In Chrome browser both versions worked fine.
