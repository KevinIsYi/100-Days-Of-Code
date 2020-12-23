import React, { useState, useEffect } from 'react';

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario';

const App = () => {

  const [citas, setCitas] = useState([]);
  useEffect(() => {
    const obtenerCitasStorage = async() => {
      console.log("Eeeeh");
      try {
        const citasStorage = await AsyncStorage.getItem('citas');
        if (citasStorage) {
          setCitas(JSON.parse(citasStorage));
        }
      } catch (error) {
        console.log(error);
      }  
    }
    obtenerCitasStorage();
  }, []);


  const [ mostrarForm, guardarMostrarForm ] = useState(false);

  const eliminarCita = id => {
    const citasFiltradas = citas.filter(cita => cita.id !== id);
    setCitas(citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  } 


  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.tittle } >Administrador de Citas</Text>
      <TouchableHighlight 
          style={ styles.btnMostrarForm }
          onPress={ () => guardarMostrarForm(!mostrarForm) }
      >
          <Text style={ styles.textoMostrarForm }>{ mostrarForm ? 'Ver Citas' : 'Crear Nueva Cita'}</Text>
      </TouchableHighlight>
      <View style={ styles.contenido }>
        {
          mostrarForm ? 
            <>
              <Text style={ styles.tittle }>Crear Nueva Cita</Text>
              <Formulario 
                citas={ citas }
                setCitas={ setCitas }
                guardarMostrarForm={ guardarMostrarForm }
                guardarCitasStorage={ guardarCitasStorage }
              />
            </>
          :
            <>
              <Text style={ styles.tittle }>{ citas.length > 0 ? 'Administra tus Citas' : 'No hay Citas' }</Text>
              <FlatList
                style={ styles.listado }
                data={ citas }
                renderItem={ ({ item }) => (
                    <Cita 
                      cita={ item } 
                      eliminarCita={ eliminarCita }
                    />
                  ) 
                }
                keyExtractor={ ({ id }) => id }
              />
            </>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  tittle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1,
    marginBottom: 20
  },
  btnMostrarForm: {
      padding: 10,
      backgroundColor: '#7D024E',
      marginVertical: 20,
      
  },
  textoMostrarForm: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default App;
