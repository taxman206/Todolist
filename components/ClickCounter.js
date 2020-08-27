import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export const ClickCounter=(props)=>{
	const [click, updateClick]=useState(0);
	return (
		<View>
		<TouchableOpacity onPress={()=>{updateClick(click+1)} } style={styles.button}>
		<Text style={styles.text}>I have been clicked{click}</Text>
		</TouchableOpacity>
		</View>
	)
}

const styles= StyleSheet.create(
	{
		button:{
			minWidth:250,
			backgroundColor:'#3333ff',
			padding: 15,
			margin:10,
		},
		text:{
			color:'white',
			textAlign:'center'
		}
	}
)