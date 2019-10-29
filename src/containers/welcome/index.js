import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import Header from './Header';
import CustomButton from '../../components/CustomButton';

const {width, height} = Dimensions.get('window');

const index = () => {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Header/>
                <View>
                    <Text style={styles.subheading}>Your last workout</Text>
                </View>
                <View>
                    <Text style={styles.dateText}>Saturday Jun 12th</Text>
                </View>
            </View>
            <View style={styles.footer}> 
                <CustomButton/>
            </View>
        </View>        
    )
}

const styles = StyleSheet.create({
    main: {
        paddingVertical: height/15,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        height: '40%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    subheading: {
        fontSize: 35,
        fontWeight: '500'
    },
    dateText: {
        fontSize: 40,
        fontWeight: '600'
    },
    footer:{
        
    },
})
export default index
