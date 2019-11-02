import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Topbar from '../../components/Topbar'
import WorkoutContent from './WorkoutContent'

const Tab1 = () => (
<View style={styles.container}>
    <Topbar style={styles.topBar}>
        <Text style={styles.topBarText}>
            Current Workout
        </Text>
    </Topbar>
    <WorkoutContent/>
</View>
)
const Tab2 = () => <View><Text>Content 2</Text></View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#adbabd'
    },
    topBar: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2
    },
    topBarText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600'
    }
})

const tabNavigator = createBottomTabNavigator({
    TAB1: {
        screen: Tab1
    },
    TAB2: {
        screen: Tab2
    }
});

export default createAppContainer(tabNavigator);