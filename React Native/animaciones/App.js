import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const App = () => {
  return (
    <>
      <View style={ styles.contenido }>
        <Text>Animaciones</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100
  }
});

export default App;
