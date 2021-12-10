
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import Starscreen from './screens/Starscreens';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
const stackNavigator = createStackNavigator({
  Home:{screen:Homescreen,navigationOptions:{
    headerShown:false
  }},
  Star:{screen:Starscreen}
})
const AppContainer = createAppContainer(stackNavigator)
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}


