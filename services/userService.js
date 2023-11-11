import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const url = 'http://192.168.1.11:3333/';
const timeout = 3000;
chaveSecreta = '!@387FA8S78HUGFIAGVCU12#$u'
class UserService {
    async login(data) {
        try {
            const response = await axios.post(url + 'user/login', data, {
                timeout: timeout,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('chaveSecreta', chaveSecreta);

            console.log(response.data.token)
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error)
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
            const response = await axios.post(url + 'user/create', data, {
                timeout: timeout,
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

    async update(data) {
        try {
            const response = await axios.put(url + 'user/update', data, {
                timeout: timeout,
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

    async searchUserData(data) {
        try {
            const response = await axios.get(url + 'users', data, {
                timeout: timeout,
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