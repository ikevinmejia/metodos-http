const printPets = (data, template, container) => {

    const fragment = document.createDocumentFragment();

    data.forEach(pet => {
        const { nombre, raza, imagen } = pet;
        template.querySelector('h5').textContent = nombre;
        template.querySelector('p').textContent = raza;
        template.querySelector('img').setAttribute('src', imagen);

        const clone = template.cloneNode( true );

        fragment.append(clone)
    });

    container.append(fragment)
}

export default printPets;