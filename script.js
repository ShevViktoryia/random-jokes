async function getJokes() {
  const jokes = "./assets/data/jokes.json";
  const res = await fetch(jokes);
  const data = await res.json();
  console.log(data);
}
