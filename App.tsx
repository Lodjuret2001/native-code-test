import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./src/@types/screenProps";
import Home from "./src/screens/Home";
import ColorPalette from "./src/screens/ColorPalette";
import AppImageBackground from "./src/components/AppImageBackground";
import Overlay from "./src/components/Overlay";
import { View, StyleSheet } from "react-native";

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ message: "Hello! Welcome to the ColorApp!" }}
          />
          <Stack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}