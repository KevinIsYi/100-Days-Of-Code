import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const App = () => {


  return (
    <View style={ styles.container }>
      <Text style={ styles.tittle } >Administrador de Citas</Text>
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
    textAlign: 'center'
  }
});

export default App;
