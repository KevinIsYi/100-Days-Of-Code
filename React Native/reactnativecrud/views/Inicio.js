import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { FlatList, View, StyleSheet } from 'react-native';
import { Headline, List, Button, FAB } from 'react-native-paper';
import { globalStyles } from '../styles/global';

export const Inicio = ({ navigation }) => {
    
    const [ clientes, guardarClientes ] = useState([]);
    const [ consultarApi, guardarConsultarApi ] = useState(true);

    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const url = Platform.OS === 'ios' ? 'localhost' : 'PC IP';
                const resultado = await axios.get(`http://${ url }:3000/clientes`);
                guardarClientes(resultado.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (consultarApi) {
            obtenerClientesApi();
            guardarConsultarApi(false);
        }
    }, [ consultarApi ]);

    return (
        <View
            style={ globalStyles.contenedor }
        >
            <Button 
                icon="plus-circle" 
                onPress={() => { navigation.navigate('NuevoCliente', { guardarConsultarApi }) }}
            >
                Nuevo Cliente
            </Button>
            <Headline
                style={ globalStyles.titulo }
            >
                {
                    clientes.length > 0 ? "Clientes" : "Aún no hay clientes"
                }
            </Headline>
            <FlatList
                data={ clientes }
                keyExtractor={ cliente => (cliente.id).toString() }
                renderItem={ ({ item, item:{ nombre, empresa } }) => (
                    <List.Item
                        title={ nombre }
                        description={ empresa }
                        onPress={ () => navigation.navigate("DetallesCliente", { item, guardarConsultarApi }) }
                    />
                ) }
            />
            <FAB
                icon="plus"
                style={ styles.fab }
                onPress={() => { navigation.navigate('NuevoCliente', { guardarConsultarApi }) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    }
})