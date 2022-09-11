const inputSearch = document.getElementById("input-search");
// const btnSearch = document.getElementById("btn-search");
const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
const cards = document.getElementById("cards");
const load = document.getElementById("load");


//Fetch function
const getCharacters = async (nameOfCharacter) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    for (const key in data) {
      const element = data[key];
      const names = element.name.toLowerCase();
      let positionString = names.indexOf(nameOfCharacter.toLowerCase());
      if (positionString !== -1) {
        setTimeout(() => {
          cards.innerHTML += `
          <div class="card">
          <div class="face front">
              <img src="${element.imageUrl}" alt="">
              <h3>${element.name}</h3>
          </div>
          <div class="face back">
              <h3>${element.name}</h3>
              <br>Raza: ${element.specie}</br>
              Estado: ${element.status}</br>
              Universo: ${element.universe}</br>
              Rol: ${element.role}</br>
              Planeta de origen: ${element.originplanet}</br>
            </p>
          </div>
      </div>
          `;
        }, 4000);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//Clean function
const cleanHtml = () => {
  cards.innerHTML = "";
};


//loading function
let intervalId;
let intervalId_2;

const loading = () => {

  load.style.display = "inline";
  let numimggoku = 1;
  let maximggoku = 2;
  intervalId = setInterval(change_img, 150);
  function change_img() {
    numimggoku++;
    if (numimggoku > maximggoku) {
      numimggoku = 1;
    }
    document.getElementById("imgcontent1").src =
      "images/goku" + numimggoku + ".png";
  }
  let numimgsopa = 1;
  let maximgsopa = 8;
  intervalId_2 = setInterval(change_img2, 600);
  function change_img2() {
    numimgsopa++;
    if (numimgsopa > maximgsopa) {
      numimgsopa = 1;
    }
    document.getElementById("imgcontent2").src =
      "images/sopa" + numimgsopa + ".png";
  }
};

const hideLoading = () => {
  return load.style.display = "none";
};


//Add function to the button
inputSearch.addEventListener("keyup", (event) => {

  if (event.code == "Enter") {
    cleanHtml();
    loading();
    setTimeout(() => {
      hideLoading();
      clearInterval(intervalId);
      clearInterval(intervalId_2);
    }, 4000);
    getCharacters(inputSearch.value);
  }
});
