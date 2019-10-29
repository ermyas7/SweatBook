import React from 'react'
import {TouchableHighlight, Text, StyleSheet} from 'react-native'
import {route} from '../routes';

const CustomButton = ({navigateTo}) => {
    return (
        <TouchableHighlight style={styles.buttonContainer}
        onPress={() => navigateTo(route.WORKOUT)}>
            <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 15
    },
    buttonText: {
        fontSize: 35,
        fontWeight: '500'
    }
})

export default CustomButton
