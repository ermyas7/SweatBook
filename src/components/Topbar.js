import React from 'react'
import {View, StyleSheet} from 'react-native'

const Topbar = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#46acc2',
    }
})

export default Topbar
