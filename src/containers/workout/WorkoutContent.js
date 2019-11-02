import React from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableHighlight} from 'react-native'

const WorkoutContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.topHeading}>
                Add Some Excercise
            </Text>
            <TouchableHighlight style={styles.addButton}>
                <Text style={styles.addButtonText}>
                    +
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 30
    },
    topHeading: {
        color: '#f6f5ae',
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 10
    },
    addButton: {

    },
    addButtonText: {
        fontSize: 55,
        fontWeight: '600',
        color: '#c05746'
    }
})

export default WorkoutContent
