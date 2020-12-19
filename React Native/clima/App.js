import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Clima } from './components/Clima';
import { Formulario } from './components/Formulario';

const App = () => {

  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });
  const [ bgColor, guardarBgColor ] = useState('rgb(71, 149, 212)');

  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }

  const bgColorApp = {
    backgroundColor: bgColor
  }

  useEffect(() => {
    if (consultar) {
        const consultarAPI = async() => {
            const { ciudad, pais } = busqueda;
            const apiKEY = '-';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ ciudad },${ pais }&appid=${ apiKEY }`;

            console.log(url);
            try {
                const req = await fetch(url);
                const res = await req.json();
                
                guardarResultado(res);
                guardarConsultar(false);


                const kelvin = 273.15;
                const { main } = resultado;
                const actual = main.temp - kelvin;

                if (actual < 10) {
                  guardarBgColor('rgb(105, 105, 149)');
                } else if (actual < 25) {
                  guardarBgColor('rgb(71, 149, 212)');
                } else {
                  guardarBgColor('rgb(178, 28, 61)');
                }

            } catch (error) {
                console.log(error);
                Alert.alert(
                    'Error',
                    'No hay resultados, intenta con otra ciudad o país',
                    [
                        {
                            text: 'OK'
                        }
                    ]
                )
            }
        }
        consultarAPI();
    }
}, [ consultar ]);


  return (
    <TouchableWithoutFeedback
      onPress={ ocultarTeclado }
    >
      <View style={[ styles.app, bgColorApp ]} >
        <View style={ styles.contenido }>
          <Clima 
            resultado={ resultado }
          />
          <Formulario 
            busqueda={ busqueda }
            guardarConsultar={ guardarConsultar }
            guardarResultado={ guardarResultado }
            guardarBusqueda={ guardarBusqueda }
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
