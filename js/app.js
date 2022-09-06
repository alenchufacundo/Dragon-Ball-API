const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
const cards = document.getElementById("cards");
const load = document.getElementById("load");

//Fetch function
const getCharacters = async (nameOfCharacter) => {
  try{

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
              Role: ${element.role}</br>
              Planeta de origen: ${element.originplanet}</br>
            </p>
          </div>
      </div>
          `;
        }, 3000);
    
      }
    }
  }
  catch(error){
    console.log(error)
  }
};

//Clean function
const cleanHtml = () => {
  cards.innerHTML = "";
}

// //loading function
// const loading = () => {
//   load.innerHTML = 
//   `
  
//   `
// }


//Add function to the button
btnSearch.addEventListener("click", () => {
  if (inputSearch.value != "") {
    cleanHtml();
    // loading()
    getCharacters(inputSearch.value);
  } else {
    alert("debes ingresar un nombre");
  }
});
