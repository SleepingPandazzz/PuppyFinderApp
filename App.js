import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
