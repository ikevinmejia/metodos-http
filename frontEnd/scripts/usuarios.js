import { deletUser, postUsers } from "../helpers/crud.js";
import getData from "../helpers/getData.js";

const form = document.querySelector('#formulario');
const btnCorreo = document.querySelector('#btnCorreo');
const btnEliminar = document.querySelector('#btnEliminar');

const nombre = document.querySelector('#name');
const apellido = document.querySelector('#lastName');
const correo = document.querySelector('#email');
const id = document.querySelector('#id');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        nombre : nombre.value,
        apellido : apellido.value,
        correo : correo.value,
    }
    postUsers( user );
});

btnCorreo.addEventListener('click', async() => {
    const input = document.querySelector('#email').value;
    const data = await getData('http://localhost:3000/usuarios');
    const user = data.find(usuario => usuario.correo.toLowerCase() === input.toLowerCase());
    if (user) {
        const {nombre:name, apellido:lastN, correo:email, id:idUser} = user;
        nombre.value = name;
        apellido.value = lastN;
        correo.value = email;
        id.value = idUser;

        btnEliminar.disabled = false;

    } else {
        Swal.fire(
            'Usuario Encontrado',
            'success',
          )
    }


    console.log(user);
});

btnEliminar.addEventListener('click', () => {

    deletUser(`http://localhost:3000/usuarios/${id.value}`);
    console.log(id.value)
});