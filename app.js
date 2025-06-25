function getType(){
    const pokemon = document.getElementById('pokemon-input').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}?format=j1`;   

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderData(data);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
        document.getElementById('sprite').innerHTML = "Oops! Something Went Wrong";
    })
}

function renderData(data){
    const type1 = capitalizeFirstLetter(data.types[0].type.name);
    const type2 = data.types[1] ? capitalizeFirstLetter(data.types[1].type.name) : "None";
    const sprite = data.sprites.other['official-artwork'].front_default;

    document.getElementById("type1").innerHTML = `${type1}`;
    document.getElementById("type2").innerHTML = `${type2}`;
    document.getElementById("sprite").src = sprite;
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("submit-button").addEventListener('click', getType);

document.getElementById("pokemon-input").addEventListener("keypress", event => {
    if(event.key === "Enter") {
        document.getElementById("submit-button").click();
    }
});