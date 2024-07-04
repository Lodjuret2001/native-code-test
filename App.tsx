import "react-native-gesture-handler";
import React from "react";
import Home from "./src/screens/Home";
import ColorPalette from "./src/screens/ColorPalette";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./src/@types/screenProps";
import CreateColorPalette from "./src/screens/CreateColorPalette";

const RootStack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="dark" />
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Group>
            <RootStack.Screen
              name="Home"
              component={Home}
              initialParams={{ message: "Hello! Welcome to the ColorApp!" }}
            />
            <RootStack.Screen
              name="ColorPalette"
              component={ColorPalette}
              options={({ route }) => ({ title: route.params.name })}
            />
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen
              name="CreateColorPalette"
              component={CreateColorPalette}
              options={({ route }) => ({ title: route.params.name })}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
