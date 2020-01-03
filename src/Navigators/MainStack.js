import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeStack from './HomeStack';

//Screens
import Preload from '../Screens/Preload';

const MainStack = createStackNavigator(
  {
    Preload,
    HomeStack,
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainStack);
