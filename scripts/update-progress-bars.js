import { progressValues } from "./get-progress-values-and-last-edit-values.js";

// imported values comes as floats, but percentage values are required (e.g. 55 instead of 0.55)
const percentageProgresses = progressValues.map((value) => value * 100);

const progressbars = document.querySelectorAll(".course__progressbar--js");

const changeProgress = (progress, bar) => {
  bar.style.width = `${progress}%`;
};

for (let i = 0; i < progressbars.length; i++) {
  changeProgress(percentageProgresses[i], progressbars[i]);
}
