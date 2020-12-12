import React, { useState } from 'react';

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
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

  const [ mostrarForm, guardarMostrarForm ] = useState(false);

  const eliminarCita = id => {
    setCitas(citas.filter(cita => cita.id !== id));
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
