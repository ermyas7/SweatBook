import React from 'react'
import {View, Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const Tab1 = () => <View><Text>Hello World!</Text></View>
const Tab2 = () => <View><Text>Tab2</Text></View>
const Tab3 = () => <View><Text>Workout two</Text></View>

const tabNavigator = createBottomTabNavigator({
    TAB1: {
        screen: Tab1
    },
    TAB2: {
        screen: Tab2
    },
    TAB3: {
        screen: Tab3
    }
});

export default createAppContainer(tabNavigator);