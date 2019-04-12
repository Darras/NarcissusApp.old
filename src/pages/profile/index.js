import React, { Component } from 'react';
import { View,Text } from 'react-native';

import Header from '../header';

import styles from './styles';
const headertext = 'Profile';

export default class Profile extends Component {
    render() {
      return (
        <View style={styles.container}>
              <Header headertext={headertext} navigation={this.props.navigation}/>
          <Text>TESTE de Texto PROFILE</Text>
        </View>
      );
    }
  }