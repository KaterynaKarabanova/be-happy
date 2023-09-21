const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");
const setup = document.querySelector(".joke-setup");
const punchline = document.querySelector(".joke-punchline");
let i = 0;
let a = 0;
const images = [
  "./images/background3.jpg",
  "./images/back3.webp",
  "./images/back4.jpg",
];
const titles = [
  "You need some positive vibes, don't you?",
  "Are you overworking again?",
  "When was the last time you went on vacation?",
];
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
function changeBack() {
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
changeBack();

// function getJoke() {
//   const data = axios.get("https://official-joke-api.appspot.com/random_joke");
//   setup.textContent = data.setup;
//   punchline.textContent = data.punchline;
// }
