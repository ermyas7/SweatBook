import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../containers/welcome';

export const route = {
    HOME: 'HOME'
}

const stackNavigator = createStackNavigator({
    [route.HOME]: { screen: Welcome}
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
)

export default createAppContainer(stackNavigator);