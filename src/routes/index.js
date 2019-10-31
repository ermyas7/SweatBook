import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../containers/welcome';
import Workout from '../containers/workout';

export const route = {
    HOME: 'HOME',
    WORKOUT: 'WORKOUT'
}

const stackNavigator = createStackNavigator({
    [route.HOME]: { screen: Welcome},
    [route.WORKOUT]: {screen: Workout}
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
)

export default createAppContainer(stackNavigator);