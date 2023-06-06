import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Logo Container */}
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/logo.png')} style={{ width: '100%' }} resizeMode="contain" />
            </View>

            {/* Text Container */}
            <View style={styles.containerForm}>
                <Text style={styles.title}>Seu caminho para uma vida saudável começa aqui!</Text>
                <Text style={styles.subtitle}>Faça login para começar!</Text>
            </View>

            {/* Login Button Container */}
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    }

    , containerLogo: {
        flex: 1,
        backgroundColor: '#ffffff',
    }

    , containerForm: {
        flex: 1,
        backgroundColor: '#ffffff',
    }

    , title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        paddingTop: '5%',
    }

    , subtitle: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#a1a1a1',
        textAlign: 'center',
        paddingTop: '5%',
    }

    , button: {
        width: '60%',
        backgroundColor: '#7159c1',
        borderRadius: 40,
        paddingVertical: 10,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 80,
    }

    , buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    }
});
