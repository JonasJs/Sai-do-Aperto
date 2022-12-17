import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

// Screens
import { Preload } from "../screens/Preload";
import { AppRoutes } from "./App.routes";

export function Routes() {

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="preload"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen
          name="preload"
          component={Preload}
        />
        <Screen
          name="app"
          component={AppRoutes}
        />
      </Navigator>
    </NavigationContainer>
  );
}