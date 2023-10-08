import { songsForDance } from "../data/dance.js";

const danceRoulete = document.querySelector(".dance-roulete");

export function onDanceBtnClick() {
  const roulete = Math.floor(Math.random() * 241) + 160;

  danceRoulete.classList.add("rotating");
  danceRoulete.style.transform = `rotate(${roulete}deg)`;
  setTimeout(getSong, 1000);
}
function getSong() {
  const songsSummary = songsForDance.length - 1;
  const songIndex = Math.floor(Math.random() * (songsSummary + 1));
  const songObj = songsForDance[Number(songIndex)];
  alert(`This is a song for you : ${songObj}`);
}
