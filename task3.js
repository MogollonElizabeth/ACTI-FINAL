import axios from 'axios';

const guardarURL = 'http://localhost:3000/users';

export async function addUser(first_name, last_name, email) {
    
    const user = {
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

addUser("Kai", "Nathaniel", "kai.n@example.org").then(user => {
    console.log('Added user:', user);
});
