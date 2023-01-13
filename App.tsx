import * as eva from '@eva-design/eva';

import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import type { FC } from 'react';

import {
  useFonts,
  OpenSans_500Medium,
  OpenSans_400Regular,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';

// Navigation
import { AppRoute } from './src/navigation/app-routes';
import { AppNavigator } from './src/navigation/app.navigator';

// Ducks
import { selectTheme } from './src/store/ducks/theme';
import store, { persistor, useReduxSelector } from './src/store';
import { selectedWelcomeCompleted } from './src/store/ducks/welcome';

const RootComponent: FC = () => {
  const theme = useReduxSelector(selectTheme);
  const isWelcomeCompleted = useReduxSelector(selectedWelcomeCompleted);

  return (
    <ApplicationProvider {...eva} theme={eva[theme]}>
      <NavigationContainer>
        <AppNavigator initialRouteName={isWelcomeCompleted ? AppRoute.AUTH : AppRoute.WELCOME} />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export const App: FC = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_500Medium,
    OpenSans_400Regular,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent />
        <IconRegistry icons={EvaIconsPack} />
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
