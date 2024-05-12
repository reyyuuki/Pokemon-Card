const Image = document.getElementsByClassName("img")[0];
const Color = document.getElementsByClassName("Color")[0];
const Name = document.getElementsByClassName("Name")[0];
const Type = document.getElementsByClassName("Type")[0];
const Attack = document.getElementsByClassName("Attack")[0];
const Defense = document.getElementsByClassName("Defense")[0];
const Speed = document.getElementsByClassName("Speed")[0];
const Generate = document.getElementsByClassName("Generate")[0];
const HP = document.getElementsByClassName("hp")[0];
const Health = document.getElementsByClassName("Health")[0];



async function fetchdata() {

    const random = Math.floor(Math.random() * 150) + 1;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const pokemon = await data.json();
    Image.innerHTML = `<img src="${pokemon.sprites.other.dream_world.front_default}" alt="pokeman image">`;
    Name.innerHTML = `${pokemon.species.name}`;
    Type.textContent = `Type: ${pokemon.types[0].type.name}`;
    Attack.textContent = `${pokemon.stats[1].base_stat}`;
    Defense.textContent = `${pokemon.stats[2].base_stat}`;
    Speed.textContent = `${pokemon.stats[5].base_stat}`;
    HP.textContent = `${pokemon.stats[0].base_stat}`;
    Health.style.display = "flex";
    console.log(pokemon);
    if (pokemon.types[0].type.name == "fighting") {
        Color.style.background = "red";
        Type.style.background = "red";
    }
    if (pokemon.types[0].type.name == "ghost") {
        Color.style.background = "black";
        Type.style.background = "black";
    }
    if (pokemon.types[0].type.name == "water") {
        Color.style.background = "blue";
        Type.style.background = "blue";
    }
    if (pokemon.types[0].type.name == "dragon") {
        Color.style.background = "orange";
        Type.style.background = "orange";
    }
    if (pokemon.types[0].type.name == "dark") {
        Color.style.background = "grey";
        Type.style.background = "grey";
    }
    if (pokemon.types[0].type.name == "ice") {
        Color.style.background = "lightblue";
        Type.style.background = "lightblue";
    }
    if (pokemon.types[0].type.name == "normal") {
        Color.style.background = "pink";
        Type.style.background = "pink";
    }
    if (pokemon.types[0].type.name == "grass") {
        Color.style.background = "green";
        Type.style.background = "green";
    }
    if (pokemon.types[0].type.name == "bug") {
        Color.style.background = "deeppink";
        Type.style.background = "deeppink";
    }
    if (pokemon.types[0].type.name == "electric") {
        Color.style.background = "yellow";
        Type.style.background = "yellow";
    }
    if (pokemon.types[0].type.name == "psychic") {
        Color.style.background = "greenyellow";
        Type.style.background = "greenyellow";
    }
    if (pokemon.types[0].type.name == "flying") {
        Color.style.background = "cyan";
        Type.style.background = "cyan";
    }
    if (pokemon.types[0].type.name == "fire") {
        Color.style.background = "orangered";
        Type.style.background = "orangered";
    }
    if (pokemon.types[0].type.name == "poison") {
        Color.style.background = "purple";
        Type.style.background = "purple";
    }
    if (pokemon.types[0].type.name == "steel") {
        Color.style.background = "gray";
        Type.style.background = "gray";
    }
    if (pokemon.types[0].type.name == "rock") {
        Color.style.background = "rgb(119, 115, 115)";
        Type.style.background = "rgb(119, 115, 115)";
    }
    if (pokemon.types[0].type.name == "ground") {
        Color.style.background = "brown";
        Type.style.background = "brown";
    }
    if (pokemon.types[0].type.name == "fairy") {
        Color.style.background = "burlywood";
        Type.style.background = "burlywood";
    }


}