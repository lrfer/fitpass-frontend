import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const url = 'http://10.14.96.48:3333/';

export default function Trainings() {
    const navigation = useNavigation();
    const [exercices, setExercices] = useState([]);

    const exercices = [
        {
          id: 1,
          name: 'João Silva',
          muscle: 'Treinador de Musculação',
        },
        {
          id: 2,
          name: 'Maria Oliveira',
          specialty: 'Treinadora de Cardio',
        },
        {
          id: 3,
          name: 'Carlos Santos',
          specialty: 'Especialista em Calistenia',
        },
        {
          id: 4,
          name: 'Ana Souza',
          specialty: 'Especialista em Treino de Força',
        },
        // Adicione mais treinadores conforme necessário
      ];



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

        //botão de voltar para a MainPage

        <View style={styles.container}>
            <View style={styles.buttonBack}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
                    <Text style={styles.buttonText}>Main Page</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Treino 1</Text>

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
    buttonBack: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#7159c1',
        height: 50,
    },
});
