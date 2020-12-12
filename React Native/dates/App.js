import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario';

const App = () => {

  const [citas, setCitas] = useState([
    {
      id: '1',
      paciente: 'hook',
      propietario: 'Kevin',
      sintomas: 'No come'
    },
    {
      id: '2',
      paciente: 'Redux',
      propietario: 'Iván',
      sintomas: 'No come no duerme'
    },
    {
      id: '3',
      paciente: 'Native',
      propietario: 'Yo mero',
      sintomas: 'No come ni habla'
    },
  ]);

  const eliminarCita = id => {
    setCitas(citas.filter(cita => cita.id !== id));
  } 


  return (
    <View style={ styles.container }>
      <Text style={ styles.tittle } >Administrador de Citas</Text>
      <Formulario />
      <Text style={ styles.tittle }>{ citas.length > 0 ? 'Administra tus Citas' : 'No hay Citas' }</Text>
      <FlatList
        data={ citas }
        renderItem={ ({ item }) => (
            <Cita cita={ item } eliminarCita={ eliminarCita } />
          ) 
        }
        keyExtractor={ ({ id }) => id }
      />
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
  }
});

export default App;
