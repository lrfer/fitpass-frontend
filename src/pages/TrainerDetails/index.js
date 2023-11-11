import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const TrainerDetails = ({ route, navigation }) => {
  const { trainer } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} // Substitua pelo caminho da foto do treinador
        style={styles.trainerImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.trainerName}>{trainer.name}</Text>
        <Text style={styles.trainerSpecialty}>{trainer.specialty}</Text>
        <Text style={styles.trainerDescription}>
          {/* Adicione a descrição do treinador aqui */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={styles.trainerCREF}>
          CREF: {trainer.cref ? trainer.cref : 'Não informado'}
        </Text>
      </View>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Text style={styles.goBackButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  trainerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  trainerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  trainerSpecialty: {
    fontSize: 18,
    color: '#555555',
    marginBottom: 8,
  },
  trainerDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  trainerCREF: {
    fontSize: 16,
    color: '#666666',
  },
  contactButton: {
    backgroundColor: '#7159c1',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goBackButton: {
    backgroundColor: '#7159c1',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TrainerDetails;
