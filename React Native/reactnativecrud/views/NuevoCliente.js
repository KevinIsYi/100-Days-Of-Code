import React, { useState } from 'react';
import axios from 'axios';

import { View, StyleSheet, Platform } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { globalStyles } from '../styles/global';

export const NuevoCliente = ({ navigation }) => {

    const [ nombre, setNombre ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ correo, setCorreo ] = useState('');
    const [ empresa, setEmpresa ] = useState('');

    const [ alerta, setAlerta ] = useState(false);

    const guardarCliente = async () => {
        if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
            setAlerta(true);
        }
        else {
            const cliente = { nombre, telefono, correo, empresa };

            try {
                //ANDROID LOCALHOST
                const url = Platform.OS === 'ios' ? 'localhost' : '192.168.0.13';
                await axios.post(`http://${ url }:3000/clientes`, cliente);

                navigation.navigate('Inicio');
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={ globalStyles.contenedor }>
            <Headline
                style={ globalStyles.titulo }>
                Añadir Nuevo Cliente
            </Headline>
            <TextInput
                style={ styles.input }
                label="Nombre"
                value={ nombre }
                onChangeText={ nombre => setNombre(nombre) }
            />
            <TextInput
                style={ styles.input }
                label="Teléfono"
                value={ telefono }
                keyboardType="numeric"
                onChangeText={ telefono => setTelefono(telefono) }
            />
            <TextInput
                style={ styles.input }
                label="Correo Electrónico"
                value={ correo }
                keyboardType="email-address"
                onChangeText={ correo => setCorreo(correo) }
            />
            <TextInput
                style={ styles.input }
                label="Empresa"
                value={ empresa }
                onChangeText={ empresa => setEmpresa(empresa) }
            />

            <Button
                icon="pencil-circle"
                mode="contained"
                onPress={ guardarCliente }
            >
                Guardar Cliente
            </Button>

            <Portal>
                <Dialog
                    visible={ alerta }
                    onDismiss={ () => setAlerta(false) }
                >
                    <Dialog.Title>
                        Error
                    </Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los Campos son Obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setAlerta(false)}>
                            OK
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
});


