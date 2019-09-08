import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Logo />
        <Form type="Signup" />
        <View style={styles.signup}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Text style={styles.signupLink}>Sign in</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },  
  signup:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText:{
    fontSize: 16
  },
  signupLink:{
    fontSize: 16,
    fontWeight: '600',
    color: '#004a55'
  }

});