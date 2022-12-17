import React from "react";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

// Screens
import { Preload } from "../screens/Preload";
import { AppRoutes } from "./App.routes";
import { AuthRoutes } from "./Auth.routes";
import { View } from "react-native";

export function Routes() {
  return (
    <View style={{ flex:1 }}>
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
          <Screen
            name="auth"
            component={AuthRoutes}
          />
        </Navigator>
      </NavigationContainer>
      <FlashMessage
        position="top"
        duration={3000}
        statusBarHeight={20}
      />
    </View>
  );
}