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
        tabBarInactiveTintColor: theme.colors.gray_500,
      }}>
      {/* <Screen 
        name="Adicionar"
        component={Home}
        plus
        options={{
          tabBarLabel: 'Consultas',
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: theme.colors.brand_500,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 30 : 10
              }}
            >
              <Feather name="plus" color={theme.colors.white} size={size} />
            </View>
          ),
        }}
      /> */}

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