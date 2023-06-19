import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import SideMenu from "./sideMenu";
import treatJwt from "../../../services/treatJwt";

export default function MainPage() {
  const [user, setUser] = useState([]);
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [trainings, setTrainings] = useState([]);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const url = 'http://10.14.96.48:3333/';

  // Função para filtrar os treinos
  function filterTrainings(data) {
    if (id) {
      let filtered = data.filter((item) => item.userId === id);
      console.log(filtered);
      return filtered;
    } else {
      return []; // Retorna um array vazio caso não haja um `id`
    }
  }

  useEffect(() => {
    fetch(url + 'training')
      .then((response) => response.json())
      .then((data) => setTrainings(filterTrainings(data)))
      .catch((error) => console.log("UseEffect1 " + error));
  }, []);

  useEffect(() => {
    treatJwt.extrairDadosDoToken()
      .then((response) => {
        if (response) {
          setID(response.id);
          setName(response.name);
          setEmail(response.email);
        } else {
          console.log('Não foi possível extrair os dados do token.');
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Image source={require('../../assets/placeholder_perfil.png')} style={styles.tinyLogo} />
        <Text style={styles.exerciseText}>
          {"\nBem-Vindo, " + name + "!"}
        </Text>
        <TouchableOpacity style={styles.menuButton} onPress={toggleSideMenu}>
          <Image source={require('../../assets/menu.png')} style={styles.menuImage} />
        </TouchableOpacity>
      </View>

      <FlashList
        data={trainings}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('DetalhesTreino',{treino: item})}>
            <View>
              <Text style={styles.exerciseText}>
                {"Treino " + index+1}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        estimatedItemSize={200}
      />

      {isSideMenuOpen && <SideMenu toggleSideMenu={toggleSideMenu} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerText: {
    flexDirection: 'row',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    color: '#000000',
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
  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  exerciseText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 30,
    maxWidth: 250,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  menuImage: {
    width: 30,
    height: 30,
  },
});
