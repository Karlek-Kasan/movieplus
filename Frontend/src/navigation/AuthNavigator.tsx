import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
// import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
// import VerificationScreen from '../screens/auth/VerificationScreen';
// import CreatePasswordScreen from '../screens/auth/CreatePasswordScreen';
   import type { AuthStackParamList } from '../types/navigation.types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
 <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;