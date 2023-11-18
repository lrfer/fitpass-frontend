import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import SideMenu from "./sideMenu";
import treatJwt from "../../../services/treatJwt";
import { useNavigation } from "@react-navigation/native";

export default function MainPage() {
  const [user, setUser] = useState([]);
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [trainingsData, setTrainingsData] = useState([]);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false); // Novo estado para controlar a atualização
  const navigation = useNavigation();

  /* 
   
  */
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const url = 'http://10.14.96.48:3333/';

  function filterTrainings(data) {
    if (id) {
      let filtered = data.filter((item) => item.userId === id);
      console.log(filtered);
      return filtered;
    } else {
      console.log('Não foi possível filtrar os treinos.');
      return [];
    }
  }

  useEffect(() => {
    fetch(url + 'training')
      .then((response) => response.json())
      .then((data) => {
        const filteredTrainings = filterTrainings(data);
        setTrainingsData(filteredTrainings);
      })
      .catch((error) => console.log("UseEffect1 " + error));
  }, [shouldRefresh]); // Atualizado para observar shouldRefresh

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
      })
      .catch((error) => console.log("UseEffect1 " + error));
  }, []);

  useEffect(() => {
    // Atualiza os treinos quando o ID muda
    setTrainingsData(filterTrainings(trainingsData));
  }, [id]);

  // Função para forçar a atualização
  const forceRefresh = () => {
    setShouldRefresh(!shouldRefresh);
  };

  const scheduleRefresh = () => {
    setTimeout(() => {
      forceRefresh();
    }, );
  };

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
        data={trainingsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => { navigation.navigate('Trainings'); scheduleRefresh(); }}>
            <View>
              <Text style={styles.exerciseText}>
                {"Treino " + (index+1)}
              </Text>
              <Text style={styles.exerciseTrainer}>
                {"Treinador: " + "André Santos"}
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
  exerciseTrainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 30,
    paddingTop: 10,
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