import { postUsers } from "../helpers/crud.js";

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#name').value;
    const apellido = document.querySelector('#lastName').value;
    const correo = document.querySelector('#email').value;

    const user = {
        nombre,
        apellido,
        correo,
    }
    postUsers( user );
})