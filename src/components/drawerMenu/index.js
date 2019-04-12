import React,{Component} from 'react';

import { 
    Platform, 
    Dimensions,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import styles from './styles';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class DrawerMenu extends Component{
    navLink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Image style={styles.img} source={require('../../assets/profile.jpg')} />
                                </TouchableOpacity>
                            </View>
                        <View>
                            <Text style={{color:'white',fontSize:18}}>Gabriel Darruiz</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Home','Home')}
                    {this.navLink('Profile','Profile')}
                    {this.navLink('Social','Social')}
                    {this.navLink('Suporte','Suporte')}
                </View>
            </View>
        )
    }
}