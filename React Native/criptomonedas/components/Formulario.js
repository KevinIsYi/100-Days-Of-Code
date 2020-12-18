import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

export const Formulario = ({ moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarAPI }) => {

    const [ criptomonedas, guardarCriptomonedas ] = useState([]);

    const obtenerMoneda = (moneda) => {
        guardarMoneda(moneda);
    }

    const obterCriptoMoneda = cripto => {
        guardarCriptomoneda(cripto);
    }

    const cotizarPrecio = () => {
        if (moneda === '' || criptomoneda === '') {
            mostrarAlerta();
        }
        else {
            guardarConsultarAPI(true);
        }
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error', // Encabezado
            'Ambos campos son Obligatorios', // Cuerpo Mensaje
            [
                {
                    text: 'OK',
                }
            ]
        )
    }

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
            console.log(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    return (
        <View>
            <Text style={ styles.label }>Moneda</Text>
            <Picker
                selectedValue={ moneda }
                onValueChange={ obtenerMoneda }
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label='- Seleccione -' value="" />

                <Picker.Item label='Dólar de EUA' value="USD" />
                <Picker.Item label='Peso Mexicano' value="MXN" />
                <Picker.Item label='Euro' value="EUR" />
                <Picker.Item label='Libra Esterlina' value="GBP" />

            </Picker>
            <Text style={ styles.label }>Criptomoneda</Text>
            <Picker
                selectedValue={ criptomoneda }
                onValueChange={ obterCriptoMoneda }
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label='- Seleccione -' value="" />

                {
                    criptomonedas.map(({ CoinInfo }) => (
                        <Picker.Item 
                            key={ CoinInfo.Id }    
                            label={ CoinInfo.FullName }  
                            value={ CoinInfo.Name } />
                    ))
                }
            </Picker>
            <TouchableHighlight
                style={ styles.btnCotizar }
                onPress={ cotizarPrecio }
            >
                <Text style={ styles.textoCotizar }>Cotizar</Text>
            </TouchableHighlight>
        </View>

        
    );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

