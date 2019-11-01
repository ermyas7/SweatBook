import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native';

const BgImg = '../../../assets/images/circle-blues.png';

import Header from './Header';
import CustomButton from '../../components/CustomButton';

const {width, height} = Dimensions.get('window');

const index = (props) => {
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
                <CustomButton navigateTo={props.navigation.navigate}/>
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
        backgroundColor: '#498c8a'
    },
    header: {
        height: '40%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    subheading: {
        fontSize: 35,
        fontWeight: '500',
        color: '#fff'
    },
    dateText: {
        fontSize: 40,
        fontWeight: '600',
        color: '#fff'
    },
    footer:{
        
    },
})
export default index
