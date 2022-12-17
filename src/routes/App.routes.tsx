import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

// Hooks
import { useAuth } from '../context/auth';
// Navigation
import { useNavigation } from "@react-navigation/native";

// Routes
import { Home } from '../screens/Home';
import { Profile } from "../screens/Profile";
import { Listing } from "../screens/Listing";

import { AuthRoutes } from './Auth.routes';

export function AppRoutes() {
  const { user } = useAuth();
  const theme = useTheme();


  const navigation = useNavigation();


  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.brand_500,
        },
        headerTitleStyle: {
          fontFamily: theme.font.medium,
          color: theme.colors.white,
          fontSize: 16,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.white,

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
        name="BANHEIROS PRÓXIMOS"
        component={Listing}
        options={{
          headerShown: true,
          tabBarLabel: 'listing',
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
      
      {user?.uid ? (
        <Screen 
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
        />
      ): (
        <Screen 
          name="authRoutes"
          component={AuthRoutes}
          options={{
            tabBarLabel: 'Entrar',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user-plus" color={color} size={size} />
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => 
                  navigation.navigate("auth")
                }
              />
            )
          }}
        />
      )}

    </Navigator>
  )
}