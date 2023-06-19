import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function UserConfig() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/placeholder_perfil.png')} style={styles.tinyLogo} />

                <Text style={styles.title}>Configurações</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
                <Text style={styles.buttonText}>Main Page</Text>
            </TouchableOpacity>

        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flex: 0.25,
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
        width: 50,
        height: 50,
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


});