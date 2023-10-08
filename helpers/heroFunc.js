import { images, titles } from "../data/hero.js";
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");

let i = 0;
let a = 0;
function getPicture() {
  if (i < images.length - 1) {
    console.log(i);
    i++;
    return images[i];
  } else {
    i = 0;
    return images[0];
  }
}
function getTitle() {
  if (a < titles.length - 1) {
    console.log(a);
    a++;
    return titles[a];
  } else {
    a = 0;
    return titles[0];
  }
}
export function changeBack() {
  setInterval(
    () => (
      (hero.style.background = `linear-gradient(
          rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)
        ), url(${getPicture()})`),
      (hero.style.backgroundSize = "contain")
    ),
    2500
  );
  setInterval(() => (heroTitle.textContent = `${getTitle(titles)}`), 2500);
}
