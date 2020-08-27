import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
//importing custom component
import {Textbox} from './components/Textbox';
import {ClickCounter} from './components/ClickCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>HEY Kama</Text>
      <Button title="click me" color="green"/>
      <StatusBar style="auto" />
      <Textbox color="blue" size="24" text="Custom "/>
      <Textbox color="red" size="24" text="Custom2"/>
      <ClickCounter/>
      <ClickCounter/>
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
