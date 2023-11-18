const pokemonBoton = document.getElementById('get-pokemon')
const pokemonValue = document.getElementById('pokemon-select').value
const pokemonForm = document.querySelector(".pokemon-form")
const showpokemon = document.createElement('div')
showpokemon.classList.add("show");
pokemonForm.insertAdjacentElement('afterend', showpokemon);


pokemonBoton.addEventListener("click", () => {
    let poke = document.getElementById('pokemon-select').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    showpokemon.innerHTML = '';
    return getpokemon(url);
  });

  const getpokemon = (url) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
            throw new Error ('La solicitud no ha sido exitosa');
            }
            return response.json()})

        .then ((data) => {
            const tipo = data.types.map((element) => element.type.name);
            const template = `
                <div id="pokemon-info">
                    <img src="${data.sprites.front_default}" alt="${data.name}" />
                    <p id="nombre"> ${data.name} </p>
                    <p id="tipo"><span>Tipo:</span> ${tipo.join(', ')}</p>
                    <p id="altura"><span> Altura:</span> ${data.height} </p>
                    <p id="peso"> <span>Peso: </span>${data.weight} </p>
                </div>
            `
            showpokemon.innerHTML= template
        })
        .catch(error => {
            showpokemon.innerHTML = '';
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'No se puede mostrar la información'
            showpokemon.appendChild(errorMsg)
        })}
      

