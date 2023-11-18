import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const TrainerDetails = ({ route, navigation }) => {
  const { trainer } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.detailsContainer}>
        <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.trainerImage} />
        <Text style={styles.title}>{trainer.name}</Text>
        </View>
        <Text style={styles.trainerSpecialty}>{trainer.specialty}</Text>
        <Text style={styles.trainerCREF}>CREF: {trainer.cref ? trainer.cref : 'Não informado'} </Text>
        <Text style={styles.trainerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        
      </View>

      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contato</Text>
            <Text style={styles.modalText}>Telefone: 999999-9999</Text>
            <Text style={styles.modalText}>Email: mail@mail.com</Text>
            <TouchableOpacity style={styles.modalButton}onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>
      <TouchableOpacity style={styles.contactButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.contactButtonText}>Entrar em Contato</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('FindTrainer')}>
        <Text style={styles.goBackButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    alignContent: 'center',
    marginLeft: 10,
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
    marginBottom: 16,
    color: '#333333',
  },
  trainerSpecialty: {
    fontSize: 20,
    color: '#555555',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  trainerDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,

  },
  trainerCREF: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 16,
  },
  contactButton: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: '#7159c1',
    padding: 16,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 16,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 40,
  },
  goBackButton: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: '#7159c1',
    padding: 16,
    borderRadius: 40,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trainerImage: {
    borderRadius: 40,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: '3%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000aa',
  },
  modalButton: {
    backgroundColor: '#7159c1',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  modalButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },

});

export default TrainerDetails;
