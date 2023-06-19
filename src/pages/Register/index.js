import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react";
export default function Register() {

    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const showDatepicker = () => {
        setShowPicker(!showPicker);
    };

    

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.containerForm}>
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Telefone" />

                {showPicker && (
                <DateTimePicker mode="date" display="default" onChange={setDate} value={date} />
                )}


                <TextInput style={styles.input} placeholder="E-mail" />
                <TextInput style={styles.input} placeholder="Senha" />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.loginText}>Já tenho uma conta</Text>
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
    containerHeader: {
        paddingHorizontal: '5%',
        paddingTop: '10%',
    },
    containerForm: {
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: '2%',
        width: '100%',
    },
    button: {
        width: '60%',
        backgroundColor: '#7159c1',
        borderRadius: 40,
        paddingVertical: 10,
        marginVertical: '2%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
});
