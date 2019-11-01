import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sweat Book</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 15,
        alignItems: 'center'
    },
    heading:{
        fontSize: 50,
        fontWeight: '700',
        color: '#fff'
    }
});
export default Header
