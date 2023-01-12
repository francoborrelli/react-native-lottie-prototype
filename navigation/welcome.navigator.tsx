import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { AppNavigatorParams } from './app.navigator';
import WelcomePage from '../pages/Welcome';

type AuthNavigatorParams = AppNavigatorParams & {
  [AppRoute.WELCOME]: undefined;
};

export interface SignInScreenProps {
  navigation: StackNavigationProp<AuthNavigatorParams, AppRoute.WELCOME>;
  route: RouteProp<AuthNavigatorParams, AppRoute.WELCOME>;
}

const Stack = createStackNavigator<AuthNavigatorParams>();

export const WelcomeNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen component={WelcomePage} name={AppRoute.WELCOME} />
  </Stack.Navigator>
);
