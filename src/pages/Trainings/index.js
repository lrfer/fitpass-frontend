import React from "react";
import { Text, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useState, useEffect } from 'react';

export default function Trainings() {

    const [exercices, setexercices] = useState([])






    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
            .then((response) => response.json())
            .then((data) => setexercices(data.data))
            .catch((error) => console.log(error))
    }, []);

    return (


        <View style={styles.container}>


            <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                padding: 20,
                textAlign: 'center',
                color: '#ffffff',
                backgroundColor: '#7159c1',
            }}
            >
                Exercices
            </Text>



            <FlashList
                data={exercices}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginTop: 20, marginLeft: 12, }}>
                        <View>
                            <Text style={{
                                fontSize: 18,
                                height: 60,
                                backgroundColor: '#7159c1',
                                borderRadius: 10,
                                paddingHorizontal: 10,
                                color: '#ffffff',

                            }}>
                                {item.first_name} {item.last_name}{"\\\\"} {item.team.full_name}
                            </Text>
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
    containerHeader: {
        paddingHorizontal: '5%',
        paddingTop: '10%',

    },
    containerForm: {
        paddingHorizontal: '5%',

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
    exercices: {
        backgroundColor: "#ff000"
    }
})