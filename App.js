import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  Drawer: { screen: AppDrawerNavigator }
  // BottomTab: {
  //   screen: AppTabNavigator
  // }
})
const AppContainer = createAppContainer(switchNavigator)