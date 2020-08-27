import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
//importing custom
import {Textbox} from './components/Textbox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>HEY Kama</Text>
      <Button title="click me" color="green"/>
      <StatusBar style="auto" />
      <Textbox color="blue" size="24" text="Custom "/>
      <Textbox color="red" size="24" text="Custom2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:  {
  color:'red',
  fontSize:36
  
  }
});
