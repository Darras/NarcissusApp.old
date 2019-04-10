import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';

import { createDrawerNavigator,createAppContainer } from 'react-navigation';
import Header from '../header';
import App from '../../../App';

// import { Container } from './styles';
var render = () => {
    var config = {
        navigator: this.props.navigation
    };
}

const Menu = createDrawerNavigator({
    
    Principal:{ 
        screen: () => <Header navigation={ render.config } />,
        navigationOptions:{ title:'Principal'}
    },    
    Teste:{ 
        screen: () => <App />,
        navigationOptions:{ title:'Teste'}
    }
  
},
{
    initialRouteName: 'Principal',
    drawerWidth: 300
});
export default createAppContainer(Menu);
