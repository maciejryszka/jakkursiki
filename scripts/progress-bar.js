import { progressValues } from "./get-progress-values.js";

// imported values comes as floats, but percentage values are required (e.g. 55 instead of 0.55)
const progresses = progressValues.map(value => value * 100);

const progressbar = document.querySelectorAll(".progress");

const changeProgress = (progress, bar) => {
  bar.style.width = `${progress}%`;
};

for(let i=0; i < progressbar.length; i++) {
changeProgress(progresses[i], progressbar[i]);
}