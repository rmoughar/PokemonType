function getType(){
    const pokemon = document.getElementById('pokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}?format=j1`;   
    const pokemonInfoDiv = document.getElementById("pokemon-info");

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderData(data);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
        pokemonInfoDiv.innerText = "Oops! Something Went Wrong";
    })
}

function renderData(data){
    const type1 = capitalizeFirstLetter(data.types[0].type.name);
    const type2 = data.types[1] ? capitalizeFirstLetter(data.types[1].type.name) : "None";
    const pic = data.sprites.other['official-artwork'].front_default;

    document.getElementById("pokemon-info").innerHTML =
        `<p>Type 1: ${type1}</p>
        <p>Type 2: ${type2}</p>`
    document.getElementById('pic').src = pic;
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("type-button").addEventListener('click', getType);