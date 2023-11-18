import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const ExerciseListPage = () => {
    const navigation = useNavigation();
    const [exercises, setExercises] = useState([]);
    const sampleExercises = [
        {
            id: '1',
            name: 'Supino Reto',
            target_muscle: 'Peitoral',
            machine: 'Banco de Supino',
            reps: 10,
            sets: 3,
            restTime: 60,
        },
        {
            id: '2',
            name: 'Agachamento',
            target_muscle: 'Pernas',
            machine: 'Sem Equipamento',
            reps: 12,
            sets: 4,
            restTime: 90,
        },
        {
            id: '3',
            name: 'Rosca Direta',
            target_muscle: 'Braços',
            machine: 'Barra',
            reps: 10,
            sets: 3,
            restTime: 45,
        },
        {
            id: '4',
            name: 'Prancha',
            target_muscle: 'Abdômen',
            machine: 'Sem Equipamento',
            reps: 60,
            sets: 2,
            restTime: 30,
        },
        {
            id: '5',
            name: 'Elevação Lateral',
            target_muscle: 'Ombros',
            machine: 'Halteres',
            reps: 15,
            sets: 3,
            restTime: 45,
        },
    ];

    useEffect(() => {
        setExercises(sampleExercises);
    }, []);

    const renderExerciseItem = ({ item }) => (
        <TouchableOpacity style={styles.exerciseCard}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseText}>{`Alvo: ${item.target_muscle}`}</Text>
            <Text style={styles.exerciseText}>{`Equipamento: ${item.machine}`}</Text>
            <Text style={styles.exerciseText}>{`Repetições: ${item.reps}`}</Text>
            <Text style={styles.exerciseText}>{`Séries: ${item.sets}`}</Text>
            <Text style={styles.exerciseText}>{`Tempo de descanso: ${item.restTime} segundos`}</Text>
        </TouchableOpacity>
    );

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('MainPage')}
                >
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.id}
                renderItem={renderExerciseItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        alignItems: 'center',
        paddingHorizontal: 16,
      },
      backButton: {
        padding: 10,
        backgroundColor: '#7159c1',
        borderRadius: 40,
      },
      backButtonText: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
      },
    exerciseCard: {
        backgroundColor: '#7159c1',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 150,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 6,
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#ffffff',
    },
    exerciseText: {
        fontSize: 14,
        color: '#ffffff',
    },
});

export default ExerciseListPage;
