import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react";
import { Alert } from "react-native";
import userService from "../../../services/userService";
export default function Register() {

    const navigation = useNavigation();
    const [birthday, setBirthday] = useState(new Date());
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPicker, setShowPicker] = useState(false);


    const showDatepicker = () => {
        setShowPicker(!showPicker);
    };

    //verifica se os campos estão vazios
    function verifyRegister(name, phone, email, password) {
        if (name == '' || phone == '' || email == '' || password == '') {
            //Aleta para preencher os campos
            Alert.alert('Preencha os campos para continuar!');
            //recarrega envia para a mesma página
            navigation.navigate('Register');
        }
        // se os campos não estiverem vazios, chama a função callRegister
        else {
            callRegister();
        }
    }

    const callRegister = () => {
        // cria um objeto com os dados do usuário
        let data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            birthday: '1999-12-12'
        }
        //chama a função register do userService
        userService.register(data)
            //se o registro for bem sucedido, mostra um alerta de sucesso e  envia para a página login
            .then((response) => {
                Alert.alert('Cadastro realizado com sucesso!');
                navigation.navigate('Login');
            }
            )
            //se o login não for bem sucedido, envia um alerta
            .catch((error) => {
                Alert.alert('Erro ao cadastrar!' + error);
            }
            );

    }




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

                <TouchableOpacity style={styles.button} onPress={() => callRegister()}>
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
