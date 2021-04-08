import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LandingScreen } from './src/screens/LandingScreen';
import { HomeScreen } from './src/screens/HomeScreen';

import { Provider } from 'react-redux'
import { store } from './src/redux'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'


const switchNavigator = createStackNavigator({

  LandingScreen: {
    screen: createStackNavigator({
      Landing: LandingScreen
    },{
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  //cria o menu inferior
  homeStack : createBottomTabNavigator({
    // Home tab Icon
    home: {
      screen: createStackNavigator({
        HomePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/home.png'): require('./src/images/home_n.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    // Offet tab Icon
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/offer_icon.png'): require('./src/images/offer_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    },
    // Account icon
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/account_icon.png'): require('./src/images/account_n_icon.png')
          return <Image source={icon} style={styles.tabIcon} />
        }
      }
    }
  })
})
const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  }
});
