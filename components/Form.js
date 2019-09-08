import React, { Component } from 'react';
import { Keyboard, TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class Form extends Component{
    state={
        emailInput: ""
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    className={this.isEmailValid()}
                    value={this.state.email}
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='Email address' 
                />
        
                <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    secureTextEntry={true}
                    placeholder='Password' 
                />
        
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={Keyboard.dismiss}>
                    <Text 
                        style={styles.buttonText}
                    >
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    isEmailValid(){
       
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputBox: {
      width: 300,
      height: 35,
      paddingHorizontal: 16,
      marginVertical: 10,
      borderRadius: 10,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#004a55'
    },
    button: {
      width: 300,
      borderRadius: 10,
      paddingVertical: 12,
      marginVertical: 10,
      backgroundColor: '#004a55'
    },
    buttonText:{
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      color: '#f0f0f0'
    }
  });