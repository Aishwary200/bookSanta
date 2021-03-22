import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomSideBarMenu from './CustomSideBarMenu'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SettingScreen from '../screens/SettingScreen'
import MyDonationScreen from '../screens/MyDonationScreen'
import NotificationScreen from '../screens/NotificationsScreen'
import MyReceivedBookScreen from '../screens/MyReceivedBookScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    Setting: {
        screen: SettingScreen
    },
    MyDonation: {
        screen: MyDonationScreen
    },
    NotificationScreen: {
        screen: NotificationScreen
    },
    MyReceivedBook: {
        screen: MyReceivedBookScreen
    }
},

    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    }
)
