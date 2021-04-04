const URL = 'https://pokeapi.co/api/v2/pokemon/';

const render = (pkImg, pkName) => {
  const article = document.createElement('article');
  const p = document.createElement('p');
	const img = document.createElement("img");
  img.setAttribute("src", pkImg);
  p.textContent = pkName;
  article.appendChild(img)
  article.appendChild(p)
  document.getElementById('grilla').appendChild(article)
};

const getData = (fun) => {
	fetch(URL)
		.then(data => data.json())
    .then(pokemon => {
      fun(pokemon.results)
    })
};

getData(function (pk){
  for(let i = 1; i <= pk.length; i++){
    let _url = pk[i].url;
    fetch(_url)
    .then(response => response.json())
    .then(pokemon => {
      render(pokemon.sprites.front_default, pokemon.name);
    });
  }
});