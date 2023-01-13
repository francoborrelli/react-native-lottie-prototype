import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
// import { HomeNavigator } from './home.navigator';
import { AppRoute } from './app-routes';
import { WelcomeNavigator } from './welcome.navigator';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
  [AppRoute.WELCOME]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (props: Partial<StackNavigatorProps>): React.ReactElement => (
  <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
    <Stack.Screen name={AppRoute.WELCOME} component={WelcomeNavigator} />
  </Stack.Navigator>
);
