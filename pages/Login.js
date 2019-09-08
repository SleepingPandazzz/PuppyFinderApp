import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component{
    render(){
        return(
            <View>
                <Logo />
                <Form type="Login" />
                <View style={styles.login}>
                    <Text style={styles.loginText}>Not a member?</Text>
                    <Text style={styles.loginLink}>Join now</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center'
    },  
    login:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    loginText:{
      fontSize: 16
    },
    loginLink:{
      fontSize: 16,
      fontWeight: '600',
      color: '#004a55'
    }

  });