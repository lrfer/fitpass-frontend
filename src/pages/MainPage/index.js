import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useState, useEffect } from 'react';

export default function MainPage() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://e405-191-55-181-188.ngrok-free.app/exercise/getAll')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error));
    }, []);
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
        fetch('https://e405-191-55-181-188.ngrok-free.app/exercise/getAll')
            .then((response) => response.json())
            .then((data) => setExercices(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        
        <View style={styles.container} data={user}>
            <View style={styles.headerText}>

                <Image source={require('../../assets/musculos/Costas.png')} style={styles.tinyLogo} />
            
                <Text style={styles.exerciseText}>
                    {"\nBem-Vindo,\n\n " + user.name+ "!"}
                </Text>
            </View>


            <FlashList data={exercices}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                        <View style={styles.imageContainer}>
                        </View>
                        <View>


                        </View>
                    </TouchableOpacity>
                )}
                estimatedItemSize={200}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
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
});
