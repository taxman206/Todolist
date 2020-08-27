import {View, Text} from 'react-native';
import React from 'react'

export const Textbox = (props) =>{
	return (
	<View>
		<Text style ={{color:props.color, fontSize: props.size}}>{props.text}</Text>
	</View>	
	)
}