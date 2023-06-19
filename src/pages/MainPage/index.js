import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useState, useEffect } from 'react';
import SideMenu from "./sideMenu";
import treatJwt from "../../../services/treatJwt";

export default function MainPage() {
    const [user, setUser] = useState([]);
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [trainings, setTrainings] = useState([]);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    useEffect(() => {
        fetch('https://089e-191-55-18-27.ngrok-free.app/exercise/getAll')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log("UseEffect1 " + error));
    }, []);


    useEffect(() => {
        fetch('https://089e-191-55-18-27.ngrok-free.app/exercise/getAll')
            .then((response) => response.json())
            .then((data) => setTrainings(data))
            .catch((error) => console.log("useEffect2 " + error));
    }, []);

    useEffect(() => {
        treatJwt.extrairDadosDoToken()
            .then((response) => {
                if (response) {
                    setID(response.id);
                    setName(response.name);
                } else {
                    console.log('Não foi possível extrair os dados do token.');
                }
            });
    }, []);


    return (

        <View style={styles.container} data={user}>
            <View style={styles.headerText}>

                <Image source={require('../../assets/placeholder_perfil.png')} style={styles.tinyLogo} />

                <Text style={styles.exerciseText}>
                    {"\nBem-Vindo,\n\n " + name + "!"}
                </Text>
                <TouchableOpacity style={styles.menuButton} onPress={toggleSideMenu}>
                    <Image source={require('../../assets/menu.png')} style={styles.menuImage} />
                </TouchableOpacity>
            </View>



            <FlashList data={trainings} renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItem}>
                    <View>
                        <Text style={styles.exerciseText}>
                            {item.target_muscle}
                            {"\nExercício: " + item.name}
                            {"\nSéries: " + item.sets}{" | Repetições: " + item.reps}
                        </Text>
                    </View>
                    <View>


                    </View>
                </TouchableOpacity>
            )}
                estimatedItemSize={200}
            />
            {isSideMenuOpen && <SideMenu toggleSideMenu={toggleSideMenu} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#7159c1',
        height: 64,
    },
    headerText: {
        flexDirection: 'row',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '#7159c1',
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#BFB2EA',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 100,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 6,
    },
    imageContainer: {
        marginRight: 10,
    },
    tinyLogo: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    exerciseText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 30,
        maxWidth: 200,
    },
    menuButton: {
        marginLeft: 'auto',
    },
    menuImage: {
        width: 30,
        height: 30,
    },
});
