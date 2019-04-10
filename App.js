import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Header from "./src/components/header"
//import Menu from "./src/components/menu"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
