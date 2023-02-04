/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import { NavigationContainer } from '@react-navigation/native';
import {name as appName} from './app.json';
import Login from './Screen/Login';
AppRegistry.registerComponent(appName, () => App);
