import React from 'react';

import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';

import Main from '../main'
import Profile from '../profile';
import DrawerMenu from '../drawerMenu';

const width = Dimensions.get('window').width;
const drawerConfig = {
     drawerWidth : width*0.83,
     contentComponent:({navigation}) => {
         return(<DrawerMenu navigation={navigation} />)
     }
}
// import { Container } from './styles';
const drawerNavigator = createDrawerNavigator({
    Home:{
        screen: Main
    },
    Profile:{
        screen: Profile
    }
},drawerConfig);



export default createAppContainer(drawerNavigator);