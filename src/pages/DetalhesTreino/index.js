import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { FlashList } from "@shopify/flash-list";

export default function DetalhesTreino({ route }) {
  const { exerciseData } = route.params;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.exerciseItem}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseDescription}>{item.description}</Text>
        {/* Renderizar outros detalhes do exercício aqui */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      #
      <Text style={styles.title}>Detalhes do Treino</Text>
      <FlashList
        data={exerciseData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  exerciseItem: {
    backgroundColor: '#BFB2EA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseDescription: {
    fontSize: 16,
  },
});
