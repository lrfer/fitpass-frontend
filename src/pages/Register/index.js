import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
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

    // Verifica se os campos estão vazios
    function verifyRegister(name, phone, email, password) {
        if (name === '' || phone === '' || email === '' || password === '') {
            // Alerta para preencher os campos
            Alert.alert('Preencha os campos para continuar!');
            // Recarrega e envia para a mesma página
            navigation.navigate('Register');
        } else {
            callRegister();
        }
    }

    const callRegister = () => {
        // Cria um objeto com os dados do usuário
        let data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            birthday: moment(birthday).format('YYYY-MM-DD HH:mm:ss')
        };

        // Chama a função register do userService
        userService
            .register(data)
            .then((response) => {
                // Se o registro for bem sucedido, mostra um alerta de sucesso e redireciona para a página de login
                Alert.alert('Cadastro realizado com sucesso!');
                navigation.navigate('Login');
            })
            .catch((error) => {
                // Se o registro não for bem sucedido, mostra um alerta com o erro
                Alert.alert('Erro ao cadastrar: ' + error);
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.containerForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={(text) => setPhone(text)}
                />

                {showPicker && (
                    <DateTimePicker
                        mode="date"
                        display="default"
                        onChange={(event, date) => setBirthday(date)}
                        value={birthday}
                    />
                )}

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={() => verifyRegister(name, phone, email, password)}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
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
