import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export const Formulario = () => {
    return (
        <View style={ styles.formulario }>
            <View>
                <Text style={ styles.label }>Paciente: </Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={ () => {} }
                />
            </View>
            <View>
                <Text style={ styles.label }>Dueño: </Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={ () => {} }
                />
            </View>
            <View>
                <Text style={ styles.label }>Teléfono Contacto: </Text>
                <TextInput
                    style={ styles.input }
                    onChangeText={ () => {} }
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={ styles.label }>Síntomas: </Text>
                <TextInput
                    multiline
                    style={ styles.input }
                    onChangeText={ () => {} }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },  
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 40,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});
