import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useState, useEffect } from 'react';

export default function Trainings() {
    const [exercices, setExercices] = useState([]);

    useEffect(() => {
        fetch('https://e405-191-55-181-188.ngrok-free.app/exercise/getAll')
            .then((response) => response.json())
            .then((data) => setExercices(data))
            .catch((error) => console.log(error));
    }, []);

    const getImageSource = (targetMuscle) => {
        const muscleMap = {
            Costas: require('../../assets/musculos/Costas.png'),
            Peito: require('../../assets/musculos/Peito.png'),
            Ombro: require('../../assets/musculos/Ombro.png'),
            Bicepes: require('../../assets/musculos/Bicepes.png'),
            Quadricipes: require('../../assets/musculos/Quadricipes.png')
            // Adicione mais mapeamentos de músculos conforme necessário
        };

        return muscleMap[targetMuscle] || null; // Retorna a imagem correspondente ou null se não for encontrada
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Treino A</Text>

            <FlashList
                data={exercices}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                        <View style={styles.imageContainer}>
                            <Image source={getImageSource(item.target_muscle)} style={styles.tinyLogo} />
                        </View>
                        <View>
                            <Text style={styles.exerciseText}>
                                {item.target_muscle}
                                {"\nExercício: " + item.name}
                                {"\nSéries: " + item.sets}{" | Repetições: " + item.reps}
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
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
        color: '#ffffff',
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
        width: 75,
        height: 75,
        borderRadius: 10,
    },
    exerciseText: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'left',
        paddingLeft: 20,
        maxHeight: 95,
        maxWidth: 260,
    },
});
