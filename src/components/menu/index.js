import React from 'react';

import { createDrawerNavigator } from 'react-navigation';
import Header from '../header'
// import { Container } from './styles';

export default createDrawerNavigator({
    Header:{ 
        screen: () => <Header />,
        navigationOptions:{ title:'Principal'}
    }
  
}, { drawerWidth: 300 });
