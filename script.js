async function getJokes() {
  const jokes = "./assets/data/jokes.json";
  const res = await fetch(jokes);
  const data = await res.json();
  return data;
}

async function getRandomJoke() {
  const jokes = await getJokes("PromiseResult");
  let random = Math.floor(Math.random() * (jokes.value.length - 1) + 1);
  console.log(jokes.value[random].joke);
  joke_text.textContent = jokes.value[random].joke;
}

const joke_text = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.onclick = () => {
  getRandomJoke();
};
