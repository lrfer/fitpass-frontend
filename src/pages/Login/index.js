import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch("http://10.14.96.48:3333/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });

            if (response.ok) {
                // Login bem-sucedido
                console.log('Login bem-sucedido');
            } else {
                // Login falhou
                console.log('Falha no login');
            }
        } catch (error) {
            console.log('Erro na chamada de API:', error);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../../assets/logo.png')} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Faça login para continuar</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerImage: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    containerHeader: {
        paddingHorizontal: '5%',
        paddingTop: '10%',
    },
    containerForm: {
        flex: 0.7,
        paddingHorizontal: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#a1a1a1',
        textAlign: 'center',
        paddingTop: '5%',
    },
    input: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: '2%',
    },
    button: {
        width: '60%',
        backgroundColor: '#7159c1',
        borderRadius: 40,
        paddingVertical: 10,
        alignSelf: 'center',
        marginVertical: '3%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    registerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
});
