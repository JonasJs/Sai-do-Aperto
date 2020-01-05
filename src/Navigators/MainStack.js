import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions';

//Screens
import Preload from '../Screens/Preload';
import Home from '../Screens/Home';
import AddBathroom from '../Screens/AddBathroom';

const MainStack = createStackNavigator(
  {
    Preload,
    Home,
    AddBathroom,
    //HomeStack,
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
    transitionConfig: () => fromLeft(),
  },
);

export default createAppContainer(MainStack);
