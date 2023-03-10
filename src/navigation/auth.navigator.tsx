import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { AppRoute } from './app-routes';
import { AppNavigatorParams } from './app.navigator';
import { ResetPasswordScreen, SignInScreen, SignUpScreen } from '../pages/Auth';

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.SIGN_IN]: undefined;
  [AppRoute.SIGN_UP]: undefined;
  [AppRoute.RESET_PASSWORD]: undefined;
};

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_IN>;
}

export interface SignUpScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
  route: RouteProp<AuthNavigatorParams, AppRoute.SIGN_UP>;
}

export interface ResetPasswordScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
  route: RouteProp<AuthNavigatorParams, AppRoute.RESET_PASSWORD>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppRoute.SIGN_IN}
      component={SignInScreen}
      options={{ title: 'Iniciar sesión' }}
    />

    <Stack.Screen
      name={AppRoute.SIGN_UP}
      component={SignUpScreen}
      options={{ title: 'Crear cuenta' }}
    />

    <Stack.Screen
      name={AppRoute.RESET_PASSWORD}
      component={ResetPasswordScreen}
      options={{ title: 'Olvidé mi contraseña' }}
    />
  </Stack.Navigator>
);
