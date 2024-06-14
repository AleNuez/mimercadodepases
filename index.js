const inputAltas = document.getElementById('inputAltas');
const addAltas = document.getElementById('addAltas');
const listAltas = document.getElementById('listAltas');

const inputQuedan = document.getElementById('inputQuedan');
const addQuedan = document.getElementById('addQuedan');
const listQuedan = document.getElementById('listQuedan');

const inputPrestamos = document.getElementById('inputPrestamos');
const addPrestamos = document.getElementById('addPrestamos');
const listPrestamos = document.getElementById('listPrestamos');

const inputChau = document.getElementById('inputChau');
const addChau = document.getElementById('addChau');
const listChau = document.getElementById('listChau');


const clearAltas = document.querySelector("#clearAltas");
const clearQuedan = document.querySelector("#clearQuedan");
const clearPrestamos = document.querySelector("#clearPrestamos");
const clearChau = document.querySelector("#clearChau");

// Limpiar listas

clearAltas.addEventListener("click", () => {
    const lista = listAltas;
    while(lista.firstChild){
    lista.removeChild(lista.firstChild);  
    }
});
clearQuedan.addEventListener("click", () => {
    const lista = listQuedan;
    while(lista.firstChild){
    lista.removeChild(lista.firstChild);  
    }
});
clearPrestamos.addEventListener("click", () => {
    const lista = listPrestamos;
    while(lista.firstChild){
    lista.removeChild(lista.firstChild);  
    }
});
clearChau.addEventListener("click", () => {
    const lista = listChau;
    while(lista.firstChild){
    lista.removeChild(lista.firstChild);  
    }
});


// Altas
addAltas.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = e.target.alta.value.trim();
    if (playerName) {
        addToList(playerName,listAltas);
        inputAltas.value = '';
        inputAltas.focus();
    }
});

// Quedan
addQuedan.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = e.target.quedan.value.trim();
    if (playerName) {
        addToList(playerName,listQuedan);
        inputQuedan.value = '';
        inputQuedan.focus();
    }
});

// Prestamo
addPrestamos.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = e.target.presta.value.trim();
   if (playerName) {
        addToList(playerName,listPrestamos);
        inputPrestamos.value = '';
        inputPrestamos.focus();
    }
});

// Chau
addChau.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = e.target.chau.value.trim();
    if (playerName) {
        addToList(playerName,listChau);
        inputChau.value = '';
        inputChau.focus();
    }
});

// Gral fn
function addToList(playerName,targetList) {
    const li = document.createElement('li');
    li.textContent = playerName;
    targetList.appendChild(li);
}





// fetch("https://v3.football.api-sports.io/teams?id=451", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "60447606961a74eebae63eccd0989ab7"
// 	}
// })
// .then(response => response.json().then(data =>{
//     // var respuesta = data["response"];
//     // var nombre = respuesta[0].team.name;
//     // var fundadoEn = respuesta[0].team.founded;
//     // var logo = respuesta[0].team.logo;

//     // escudo.src = logo;
//     // club.innerHTML = nombre;
//     // fundado.innerHTML = fundadoEn;
    
//     }))
	
// .catch(err => {
// 	console.log(err);
// });

    


