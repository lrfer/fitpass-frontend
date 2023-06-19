import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const url = 'https://089e-191-55-18-27.ngrok-free.app/';
chaveSecreta = '!@387FA8S78HUGFIAGVCU12#$u'
class UserService {
    async login(data) {
        try {
            const response = await axios.post(url + 'user/login', data, {
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

    async logout() {
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('chaveSecreta');
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(error);
        }

    }

    async register(data) {
        try {
            const response = await axios.post(url + 'user/register', data, {
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data)
            return Promise.resolve(response.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
export default new UserService();