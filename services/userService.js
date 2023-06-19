import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const url = 'https://e405-191-55-181-188.ngrok-free.app/';
chaveSecreta = '!@387FA8S78HUGFIAGVCU12#$u'
class UserService {
    async login(data) {
        try {
            const response = await axios.post(url +'user/login', data, {
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('chaveSecreta', chaveSecreta);

            console.log(response.data.token)
            return Promise.resolve(response.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    /*async register(data) {
        try {
            const response = await axios.post(url +'user/register', data, {
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
    */
}
export default new UserService();