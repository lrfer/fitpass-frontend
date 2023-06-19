import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SideMenu = ({ onClose }) => {
  return (
    <View style={styles.container}>
      {/* Conteúdo do menu lateral */}
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Opção 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Opção 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text>Opção 3</Text>
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
  },
});

export default SideMenu;
