import axios from 'axios';

const guardarURL = 'http://localhost:3000/users';

export async function addUser(first_name, last_name, email) {
    // Crear un objeto con los datos del usuario
    const response= await axios.get(guardarURL)
    const guardardatos=response.data;
    const obtenerPenultimo= guardardatos.length-1;
    const accederalonbjero =guardardatos[obtenerPenultimo];
    const accderalID= parseInt(accederalonbjero.id);
    const suma =accderalID+1;
    const convertirstring= String(suma)
    
    const user = {
        "id":convertirstring,
        first_name,
        last_name,
        email
    };

    try {
        
        const response = await axios.post(guardarURL, user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        
        return null;
    }
}

