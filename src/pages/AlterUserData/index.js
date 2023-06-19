import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import treatJwt from "../../../services/treatJwt";
import { useEffect, useState } from 'react';


export default function AlterUserData() {
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
                } else {
                    console.log('Não foi possível extrair os dados do token.');
                }
            });
    }, []);

    return (
        <View style={styles.container}>


            <View style={styles.header}>
                <Image source={require('../../assets/placeholder_perfil.png')} style={styles.tinyLogo} />
                <Text style={styles.title}>Editar Perfil</Text>
            </View>

            <View style={styles.containerDados}>
                <TextInput style={styles.dados} placeholder="Nome" value={name} onChangeText={text => setName(text)} />
                <TextInput style={styles.dados} placeholder="Email" value={email} onChangeText={text => setEmail(text)} />
                <TextInput style={styles.dados} placeholder="Telefone" value={phone} onChangeText={text => setPhone(text)} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    buttonBack: {
        backgroundColor: '#7159c1',
        marginTop: '10%',
        marginLeft: '5%',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    header: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#7159c1',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        backgroundColor: '#7159c1',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',

    },
    containerDados: {
        flex: 0.7,
        paddingHorizontal: '5%',
    },
    dados: {
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

});