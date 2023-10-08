import { jokes } from "../data/jokes.js";

const jokeWrapper = document.querySelector(".joke-get-wrapper");

export function onJokeBtnClick() {
  const jokesSummary = jokes.length;
  const jokeIndex = Math.floor(Math.random() * (jokesSummary + 1));
  const jokeObj = jokes[Number(jokeIndex)];
  const jokeInner = `<p class='jokes-parag'>A: ${jokeObj.question}</p><p class='jokes-parag'>B:${jokeObj.answer}</p>`;
  jokeWrapper.innerHTML = jokeInner;
}
