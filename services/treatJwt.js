import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

class treatJwt{
    async  extrairDadosDoToken() {
        try {
          const token = await AsyncStorage.getItem('token');
          const chaveSecreta = await AsyncStorage.getItem('chaveSecreta');
      
          if (token && chaveSecreta) {
            const decoded = jwtDecode(token, chaveSecreta);
            const { UserPerfil } = decoded;
            const { id, name } = UserPerfil;
            return { id, name };
          } else {
            console.log('Token ou chave secreta não encontrados no AsyncStorage.');
            return null;
          }
        } catch (error) {
          console.log('Erro ao decodificar o token:', error);
          return null;
        }
      }

}

export default new treatJwt();
