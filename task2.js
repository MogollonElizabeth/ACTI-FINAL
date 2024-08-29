import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/users';

export async function listUsers() {
    try {
        const response = await axios.get(SERVER_URL);
        const users = response.data;

        
        let formattedData = users.map(user => {
            return `{` +
                `\n  id: ${user.id},` +
                `\n  first_name: '${user.first_name}',` +
                `\n  last_name: '${user.last_name}',` +
                `\n  email: '${user.email}'` +
                `\n},`;
        });

        
        formattedData = `[\n${formattedData.join('\n')}\n]`;

        console.log(formattedData);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
