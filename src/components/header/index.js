import React, { Component } from 'react';

import { View,Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles, { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Icon name="ios-menu" size={30} style={styles.icon} />
            <Text style={styles.tittle}>Profile</Text>
            <Icon name="ios-more" size={30} style={styles.icon} />
        </View>
        )
    }
}
