import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

export const Formulario = ({ citas, setCitas, guardarMostrarForm, guardarCitasStorage }) => {
    console.log(citas);

    const [ isDatePickerVisible, setDatePickerVisibility ] = useState(false);
    const [ isTimePickerVisible, setTimePickerVisibility ] = useState(false);
    const [ fecha, guardarFecha ] = useState('');
    const [ hora, guardarHora ] = useState('');
    const [ paciente, guardarPaciente ] = useState('');
    const [ propietario, guardarPropietario ] = useState('');
    const [ telefono, guardarTelefono ] = useState('');
    const [ sintomas, guardarSintomas ] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
  
    const confirmarFecha = (fecha) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };

        guardarFecha(fecha.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = (hora) => {
        const opciones = { hour: '2-digit', minute: '2-digit' };
        guardarHora(hora.toLocaleString('en-US', opciones));
        hideTimePicker();
    };


    const mostrarAlerta = () => {
        Alert.alert(
            'Error', // Título
            'Todos los campos son obligatorios',
            [
                {
                    text: 'OK' // Arreglo de botones
                }
            ]
        )
    }

    const crearNuevaCita = () => {
        if (paciente.trim() === '' || 
            propietario.trim() === '' || 
            telefono.trim() === '' || 
            fecha.trim() === '' || 
            hora.trim() === '' ||
            sintomas.trim() === '') {
            
            mostrarAlerta();
        }
        else {
            const cita = { paciente, propietario, telefono, fecha, hora, sintomas, id: shortid.generate() };
            const citasAux = [...citas, cita];
            setCitas(citasAux);
            guardarMostrarForm(false);

            guardarCitasStorage(JSON.stringify(citasAux));
        }
    }

    const cerrarTeclado = () => {
        console.log("Eh");
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={ cerrarTeclado }>
            <ScrollView style={ styles.formulario }>
                <View>
                    <Text style={ styles.label }>Paciente: </Text>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ texto => guardarPaciente(texto) }
                    />
                </View>
                <View>
                    <Text style={ styles.label }>Dueño: </Text>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ texto => guardarPropietario(texto) }
                    />
                </View>
                <View>
                    <Text style={ styles.label }>Teléfono Contacto: </Text>
                    <TextInput
                        style={ styles.input }
                        onChangeText={ texto => guardarTelefono(texto) }
                        keyboardType='numeric'
                    />
                </View>
                <View>
                <Text style={ styles.label }>Fecha</Text>
                    <Button title="Seleccionar Fecha" onPress={ showDatePicker } />
                    <DateTimePickerModal
                        isVisible={ isDatePickerVisible }
                        mode="date"
                        onConfirm={ confirmarFecha }
                        onCancel={ hideDatePicker }
                        locale='es_ES'
                    />
                    <Text>{ fecha }</Text>
                </View>
                <View>
                    <Text style={ styles.label }>Hora</Text>
                    <Button title="Seleccionar Hora" onPress={ showTimePicker } />
                    <DateTimePickerModal
                        isVisible={ isTimePickerVisible }
                        mode="time"
                        onConfirm={ confirmarHora }
                        onCancel={ hideTimePicker }
                        locale='es_ES'
                    />
                    <Text>{ hora }</Text>
                </View>
                <View>
                    <Text style={ styles.label }>Síntomas: </Text>
                    <TextInput
                        multiline
                        style={ styles.input }
                        onChangeText={ texto => guardarSintomas(texto) }
                    />
                </View>
                <TouchableHighlight 
                    style={ styles.btnSubmit }
                    onPress={ crearNuevaCita }
                >
                    <Text style={ styles.textoSubmit }>Crear Nueva Cita</Text>
                </TouchableHighlight>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%',
        marginBottom: 15
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
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#7D024E',
        marginVertical: 20,
        
    },
    textoSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
