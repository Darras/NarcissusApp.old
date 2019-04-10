import {AppRegistry} from 'react-native';
import App from './App';
import Menu from './src/components/menu'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Menu);
