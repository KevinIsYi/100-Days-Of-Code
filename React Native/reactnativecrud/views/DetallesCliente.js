import axios from 'axios';
import React from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';
import { Headline, Text, Subheading, Button } from 'react-native-paper';
import { globalStyles } from '../styles/global';

export const DetallesCliente = ({ navigation, route }) => {
    const { nombre, telefono, correo, empresa, id } = route.params.item;
    const { guardarConsultarApi } = route.params;
    const mostrarConfirmacion = () => {
        Alert.alert(
            '¿Deseas eliminar este cliente?',
            'Un contacto eliminado no se puede recuperar',
            [
                {
                    text: 'Eliminar',
                    onPress: eliminarContacto
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    const eliminarContacto = async () => {
        try {
            const url = Platform.OS === 'ios' ? 'localhost' : 'PC IP';
            await axios.delete(`http://${ url }:3000/clientes/${ id }`);

            guardarConsultarApi(true);
            navigation.navigate('Inicio');

        } catch (error) {
            
        }
    }

    return (
        <View style={ globalStyles.contenedor }>
            <Headline style={ globalStyles.titulo }>{ nombre }</Headline>
            <Text style={ styles.texto }>Empresa: {''}
                <Subheading>{ empresa }</Subheading>
            </Text>
            <Text style={ styles.texto }>Correo: {''}
                <Subheading>{ correo }</Subheading>
            </Text>
            <Text style={ styles.texto }>Teléfono: {''}
                <Subheading>{ telefono }</Subheading>
            </Text>

            <Button
                style={ styles.boton }
                mode="contained"
                icon="cancel"
                onPress={ mostrarConfirmacion }
            >
                Eliminar Cliente
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        marginBottom: 20,
        fontSize: 18
    },
    boton: {
        marginTop: 100,
        backgroundColor: 'red'
    }
})