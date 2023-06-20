/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["The dog", "His grandma", "My brother's turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const selectedWho = getRandomWord(who);
  const selectedAction = getRandomWord(action);
  const selectedWhat = getRandomWord(what);
  const selectedWhen = getRandomWord(when);

  const randomExcuse = `${selectedWho} ${selectedAction} ${selectedWhat} ${selectedWhen}`;

  console.log(randomExcuse);

  return randomExcuse;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomWord(array) {
  const index = getRandomInt(array.length);
  const selectedWord = array[index];
  return selectedWord;
}
