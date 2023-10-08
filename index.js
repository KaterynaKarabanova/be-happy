import { changeBack } from "./helpers/heroFunc.js";
import { onJokeBtnClick } from "./helpers/jokeFunc.js";
import { onDanceBtnClick } from "./helpers/danceFunc.js";
changeBack();

const jokeBtn = document.querySelector(".joke-btn");
jokeBtn.addEventListener("click", onJokeBtnClick);
const danceBtn = document.querySelector(".dance-Btn");

danceBtn.addEventListener("click", onDanceBtnClick);
