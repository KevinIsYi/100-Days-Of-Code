import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';


export const Cita = ({ cita, eliminarCita }) => {
    const { id, paciente, propietario, sintomas } = cita;

    console.log("Genera con id: ", id);
    const dialogoEliminar = () => {
        eliminarCita(id);
    }

    return (
        <View style={ styles.cita }>
            <View>
                <Text style={ styles.label }>Paciente</Text>
                <Text style={ styles.texto }>{ paciente }</Text>
            </View>
            <View>
                <Text style={ styles.label }>Propietario: </Text>
                <Text style={ styles.texto }>{ propietario }</Text>
            </View>
            <View>
                <Text style={ styles.label }>Síntomas</Text>
                <Text style={ styles.texto }>{ sintomas }</Text>
            </View>
            <View>
                <TouchableHighlight 
                    style={ styles.btnEliminar }
                    onPress={ dialogoEliminar }
                >
                    <Text style={ styles.textoEliminar }>Eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#fff',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
