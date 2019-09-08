import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Logo extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/logo_transparent.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo:{
    width: 250,
    height: 250
  }
});