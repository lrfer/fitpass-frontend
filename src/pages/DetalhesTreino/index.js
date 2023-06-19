import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function DetalhesTreino({ route }) {
  const { treino } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{treino.name}</Text>
      <Text>Target Muscle: {treino.target_muscle}</Text>
      <Text>Machine: {treino.machine}</Text>
      <Text>Comment: {treino.comment}</Text>
      <Text>Reps: {treino.reps}</Text>
      <Text>Sets: {treino.sets}</Text>
      <Text>Rest Time: {treino.restTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
