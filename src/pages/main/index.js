import React, { Component } from 'react';
import { View,Text } from 'react-native';

import Header from '../header';


import styles from './styles';
const headerText = 'Home';

export default class Main extends Component {
    

    render() {
      return (
        <View style={styles.container}>
          <Header headertext={headerText} navigation={this.props.navigation}/>
          <Text style={{flex:1,textAlign:'center',fontSize:40}}>Gui VAGABUNDO</Text>
        </View>
      );
    }
  }