import React from 'react';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();


// Test
import { View, Platform } from "react-native";

// Routes
import { Home } from '../screens/Home';

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 20,
          paddingBottom: 8,
          backgroundColor: theme.colors.white,
        },
        tabBarActiveTintColor: theme.colors.brand_500,
        tabBarInactiveTintColor: theme.colors.gray_50,
      }}>


      <Screen 
        name="listagem"
        component={Home}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" color={color} size={size} />
          ),
        }}
      />
      <Screen 
        name="perfil"
        component={Home}
        options={{
          tabBarLabel: 'Entrar',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />

    </Navigator>
  )
}