import getData from "../helpers/getData.js";
import printPets from "../modules/printPets.js";

const container = document.querySelector('#container');
const btnP = document.querySelector('#btnP');
const btnG = document.querySelector('#btnG');
const tPets = document.querySelector('#petsCard').content;
const url = 'https://mascotas-geek-ikevinmejia.herokuapp.com/';

const limpiar = document.querySelector('#lmp');

// btn limpiar

// limpiar.addEventListener('click', () =>{
//     container.innerHTML = '';
// })


// Perros
btnP.addEventListener( 'click', async() => {
    container.innerHTML = '';
    try {
        const data = await getData(`${url}perros`);
        printPets(data, tPets, container);

    } catch (error) {
        throw error
    }
});

// Gatos
btnG.addEventListener( 'click', async() => {
    container.innerHTML = '';
    try {
        const data = await getData(`${url}gatos`);
        printPets(data, tPets, container);

    } catch (error) {
        throw error
    }
});