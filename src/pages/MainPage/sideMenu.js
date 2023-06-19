import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import userService from '../../../services/userService';



const SideMenu = ({ onClose }) => {
  const navigation = useNavigation();

  function logoutAndNavigateToWelcome() {
    userService.logout();
    navigation.navigate('Welcome');
  }

  function navigateTo(screen) {
    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      {/* Conteúdo do menu lateral */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Profile')}>
        <Text style={styles.menuText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('UserConfig')}>
        <Text style={styles.menuText}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={logoutAndNavigateToWelcome}>
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 180,
    right: 0,
    width: '70%',
    height: '60%', // Define a altura desejada para o menu
    backgroundColor: '#fff',
    padding: 16,
    bottom: 0, // Posiciona o menu na parte inferior
  },
  menuItem: {
    marginBottom: 16,
    backgroundColor: '#7159c1',
  },
  menuText: {
    color: '#fff',
  }
});

export default SideMenu;
