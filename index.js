/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './App/Services/i18n';
import App from './App/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
