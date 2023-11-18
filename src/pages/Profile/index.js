import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import treatJwt from "../../../services/treatJwt";
import { useEffect, useState } from 'react';
import userService from "../../../services/userService";


export default function Profile() {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        treatJwt.extrairDadosDoToken()
            .then((response) => {
                if (response) {
                    setID(response.id);
                    setName(response.name);
                    setEmail(response.email);
                    setPhone(response.phone);
                    console.log(name + ' ' + email + ' ' + phone)
                } else {
                    console.log('Não foi possível extrair os dados do token.');
                }
            });
    }, []);


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/placeholder_perfil.png')} style={styles.tinyLogo} />
                <Text style={styles.title}>Perfil</Text>
            </View>
            
            <View style={styles.containerDados}>
                <Text style={styles.dados}>
                    {"Nome: " + name}
                </Text>
                <Text style={styles.dados}>
                    {"Email: " + email}
                </Text>
                <Text style={styles.dados}>
                    {'Telefone: ' + phone}
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlterUserData')}>
                <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
                <Text style={styles.buttonText}>Main Page</Text>
            </TouchableOpacity>
        </View>
    );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7159c1',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: '3%',
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
    containerDados: {
        flex: 0.75,
        paddingHorizontal: '5%',
        paddingTop: '10%',
    },
    dados: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#a1a1a1',
        paddingTop: '5%',
    },


});