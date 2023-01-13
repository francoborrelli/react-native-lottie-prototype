import { Button, Toggle } from '@ui-kitten/components';
import * as Location from 'expo-location';
import AppIntroSlider from 'react-native-app-intro-slider';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, Text, PermissionsAndroid } from 'react-native';

import SliderOption1 from './components/SlideOption1';
import SliderOption2 from './components/SlideOption2';

import type { RenderItemInterface, Slide } from './types';

const renderItem = ({ item, index }: RenderItemInterface) => {
  switch (index) {
    case 0:
      return <SliderOption1 item={item} />;
    case 1:
      return <SliderOption2 item={item} />;
    case 2:
      return <SliderOption1 item={item} />;
    default:
      return <SliderOption2 item={item} />;
  }
};

export const WelcomePage: FC = () => {
  const [step, setStep] = useState<number>(0);

  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    const checkRequest = async () => {
      const status = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      setHasPermission(status);
    };
    checkRequest();
  }, [setHasPermission]);

  const requestPermission = useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setHasPermission(false);
      return;
    } else {
      setHasPermission(true);
    }
    console.log(status);
  }, [setHasPermission]);

  const slides: Slide[] = [
    {
      key: 1,
      textColor: 'white',
      backgroundColor: '#ef476f',
      title: 'Te damos la bienvenida',
      animation: {
        autoPlay: true,
        source: require('../../../assets/animations/welcome.json'),
      },
      text: 'Antes de empezar tenemos que configurar un par de cosas para dejar la app en funcionamiento.',
    },
    {
      key: 4,
      title: 'Modo',
      textColor: 'white',
      backgroundColor: '#7d5ba6',
      speed: !isDarkTheme ? -1 : 1,
      animation: {
        autoPlay: false,
        source: require('../../../assets/animations/darkmode.json'),
      },
      text: 'Es momento de configurar como queres usar tu aplicación',
      actions: <Toggle checked={isDarkTheme} onChange={setDarkTheme} status='warning'></Toggle>,
    },
    {
      key: 2,
      textColor: 'white',
      title: 'Permisos de GPS',
      backgroundColor: '#ffc43d',
      text: 'Esta app utiliza la ubicación del usuario para brindar contenido.',
      animation: {
        autoPlay: true,
        source: require('../../../assets/animations/enable-gps.json'),
      },
      actions: !hasPermission ? (
        <Button style={{ borderRadius: 20 }} onPress={requestPermission} status='danger'>
          Dar permisos
        </Button>
      ) : (
        <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 5 }}>
          <Text style={[styles.message, { color: 'white', fontFamily: 'OpenSans_500Medium' }]}>
            Parece que la app ya cuenta con los permisos necesarios.
          </Text>
        </View>
      ),
    },

    {
      key: 3,
      title: '¡Listo!',
      textColor: 'white',
      backgroundColor: '#45425a',
      animation: {
        autoPlay: false,
        source: require('../../../assets/animations/checkDone.json'),
      },
      text: 'Hemos terminado. Ya puedes empezar a usar la aplicación',
    },
  ];

  const canContinue = useMemo(() => step !== 2 || hasPermission, [step, hasPermission]);

  return (
    <AppIntroSlider<Slide>
      data={slides}
      prevLabel='volver'
      nextLabel='Siguiente'
      doneLabel='Finalizar'
      renderItem={renderItem}
      onSlideChange={setStep}
      dotClickEnabled={false}
      scrollEnabled={canContinue}
      activeDotStyle={{ backgroundColor: 'gray' }}
      renderNextButton={canContinue ? undefined : () => null}
    />
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    fontFamily: 'OpenSans_500Medium',
  },
});

export default WelcomePage;
