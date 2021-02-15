console.log("logged in script 2");

const loading = document.querySelector(".loader");

setTimeout(function(){
    loading.innerHTML = "Done Loading!";
}, 3000);

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const outPut = document.querySelector(".games");

async function allGames(){
  try {
    const response = await fetch(url);
    const list = await response.json();
    const games = list.results;
    
    outPut.innerHTML = "";


    for (let i = 0; i <= games.length; i++){
      if (i===8) {
        break;
      } 
      
      
      outPut.innerHTML += `<div class= "outPutResult"> <h1>${games[i].name}</h1> <br></br> <p>Rating:${games[i].rating}</p> <br></br> <p>Tag:${games[i].tags.length}</p> </div>`;
    }
  } catch (error) {
    outPut.innerHTML = error;  
  } 
}

allGames();
            

   