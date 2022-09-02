const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
const cards = document.getElementById("cards");

//Fetch function
const getCharacters = async (nameOfCharacter) => {
  const response = await fetch(URL);
  const data = await response.json();

  for (const key in data) {
    const element = data[key];
    const names = element.name.toLowerCase();
    let positionString = names.indexOf(nameOfCharacter.toLowerCase());
    if (positionString !== -1) {    
      cards.innerHTML += `
      <div class="card">
      <figure class="card__figure">
        </figure>
          <figure class="card__figure--character" style="background-image:url(${element.imageUrl}); background-repeat: no-repeat; background-size: 100% 100%;">
      </figure>
      <h1 class="card-title">${element.name}</h1>
      <div class="card__info">
        <p class="card__info--specie card__description">Race: ${element.specie}</p>
        <p class="card__info--status card__description">Status: ${element.status}</p>
        <p class="card__info--universe card__description">Universe: ${element.universe}</p>
      </div>
    </div>
      `;
    }
  }
};

//Clean function
const cleanHtml = () => {
  cards.innerHTML = "";
}



//Add function to the button
btnSearch.addEventListener("click", () => {
  if (inputSearch != "") {
    cleanHtml()
    getCharacters(inputSearch.value);
  } else {
    alert("debes ingresar un nombre");
  }
});
