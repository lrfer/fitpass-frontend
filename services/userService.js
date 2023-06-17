import axios from 'axios';

class UserService {
    async login(data) {
        try {
            const response = await axios.post('http://172.28.160.1/testeLogin/login.php', data, {
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return Promise.resolve(response.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new UserService();