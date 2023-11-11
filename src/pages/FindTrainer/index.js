import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const TrainerList = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('');

  const trainers = [
    {
      id: 1,
      name: 'João Silva',
      specialty: 'Treinador de Musculação',
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

  const handleSearch = () => {
    // Implemente a lógica de pesquisa aqui
    console.log(`Pesquisando por: ${searchText}`);
  };

  const handleFilter = () => {
    // Implemente a lógica de filtro aqui
    console.log(`Filtrando por: ${filter}`);
  };

  const handleTrainerPress = (trainer) => {
    navigation.navigate('TrainerDetails', { trainer });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Text style={styles.filterButtonText}>Filtrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trainersContainer}>
        {trainers.map((trainer) => (
          <TouchableOpacity
            key={trainer.id}
            style={styles.trainerItem}
            onPress={() => handleTrainerPress(trainer)}
          >
            <Image
              source={require('../../assets/logo.png')}
              style={styles.trainerImage}
            />
            <View style={styles.trainerInfo}>
              <Text style={styles.trainerName}>{trainer.name}</Text>
              <Text style={styles.trainerSpecialty}>{trainer.specialty}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#7159c1',
    height: 64,
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
  searchContainer: {
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    flex: 0.5,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  filterButton: {
    backgroundColor: '#7159c1',
    padding: 10,
    borderRadius: 40,
  },
  filterButtonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  trainersContainer: {
    marginTop: 20,
  },
  trainerItem: {
    flexDirection: 'row',
    backgroundColor: '#7159c1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 100,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 6,
  },
  trainerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  trainerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  trainerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  trainerSpecialty: {
    fontSize: 14,
    color: '#ffffff',
  },
});

export default TrainerList;
