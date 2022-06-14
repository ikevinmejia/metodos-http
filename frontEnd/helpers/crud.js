const url = 'https://mascotas-geek-ikevinmejia.herokuapp.com/usuarios';

const postUsers = async(user) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( user ),
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        });
        Swal.fire(
            'Usuario registrado',
            'You clicked the button!',
            'success',
          )
    } catch (error) {
        throw error
    }
}

const deletUser = (url) => {
        Swal.fire({
            title: "¿Seguro deseas eliminar este usuario?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Sí, elimnar',
        }).then( async (result) =>{
            if (result.isConfirmed){

                try {
                    await fetch(url, {
                        method: "DELETE"
                    });
                    Swal.fire({
                        icon: 'error',
                        title: 'Cuenta eliminada',
                      })

                } catch (error){
                    throw error;
                }
            }
        })
}

const putUser = async(url, info) => {
    try {
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(info),
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        });
        Swal.fire(
            'Usuario Actualizado',
            'You clicked the button!',
            'success',
          )

    } catch (error) {
        
    }
}

export {
    postUsers,
    deletUser,
    putUser
}

