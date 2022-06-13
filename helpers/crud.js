const url = 'http://localhost:3000/usuarios';

const postUsers = async(user) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( user ),
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        });
    } catch (error) {
        
    }
}

export {
    postUsers
}