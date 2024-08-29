import axios from 'axios';

const guardarURL = 'http://localhost:3000/users';

export async function addUser(first_name, last_name, email) {
    // Crear un objeto con los datos del usuario
    const user = {
        first_name,
        last_name,
        email
    };

    try {
        // Enviar el objeto como datos en el POST request
        const response = await axios.post(guardarURL, user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        // Puedes devolver un valor de error o manejar el error de otra manera aquí
        return null;
    }
}

addUser("Kai", "Nathaniel", "kai.n@example.org").then(user => {
    console.log('Added user:', user);
});