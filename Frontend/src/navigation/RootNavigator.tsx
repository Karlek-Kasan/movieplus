import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SplashScreen from "../screens/splash/SplashScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Auth" component={AuthNavigator}/>
        <Stack.Screen name="App" component={AppNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;