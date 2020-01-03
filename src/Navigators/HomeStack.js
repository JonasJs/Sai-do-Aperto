import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Screens
import Home from '../Screens/Home';

//Component
import CustomTabBar from '../Components/CustomTabBar';

export default createBottomTabNavigator(
  {
    Home,
  },
  {
    tabBarComponent: props => (
      <CustomTabBar
        {...props}
        items={[
          {title: 'Perfil', icon: '...', route: 'Profile'},
          {title: 'Home', icon: '...', route: 'Home'},
          {title: 'Pesquisar', icon: '...', route: 'Search'},
        ]}
      />
    ),
    tabBarOptions: {
      activeTintColor: '#4F4F4F',
      inactiveTintColor: '#ddd',
    },
  },
);
