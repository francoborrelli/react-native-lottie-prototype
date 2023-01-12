import * as eva from '@eva-design/eva';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import type { FC } from 'react';

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_700Bold,
  OpenSans_400Regular,
  OpenSans_800ExtraBold,
  OpenSansCondensed_700Bold,
} from '@expo-google-fonts/dev';
import { StatusBar } from 'expo-status-bar';

import { AppNavigator } from './navigation/app.navigator';
import { AppRoute } from './navigation/app-routes';

export const App: FC = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_500Medium,
    OpenSans_700Bold,
    OpenSans_400Regular,
    OpenSansCondensed_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <>
      <StatusBar translucent />
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <AppNavigator initialRouteName={false ? AppRoute.WELCOME : AppRoute.AUTH} />
        </NavigationContainer>
      </ApplicationProvider>
    </>
    //</PersistGate>
    // </Provider>
  );
};

export default App;
