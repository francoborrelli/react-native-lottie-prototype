import { Card, Layout } from '@ui-kitten/components';

import { FC, useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';

import type { SliderItemInterface } from '../types';

export const InitialPage: FC<SliderItemInterface> = (props) => {
  const { item } = props;
  const { speed } = item;

  const animation = useRef<LottieView>(null);
  useEffect(() => {
    animation.current?.play();

    return () => {};
  }, [animation, speed]);

  return (
    <Layout style={[styles.container, { backgroundColor: item.backgroundColor }]}>
      <Card style={[styles.card, styles.shadowProp]}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description}>{item.text}</Text>

        {item.actions ? <View style={styles.actions}>{item.actions}</View> : null}
      </Card>

      {/* Animation */}
      {item.animation ? (
        <LottieView
          style={{
            width: 250,
            height: 250,
          }}
          speed={speed}
          ref={animation}
          source={item.animation.source}
          loop={item.animation.autoPlay}
          autoPlay={item.animation.autoPlay}
        />
      ) : null}

      <View></View>
      <View></View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  title: { fontSize: 30, marginTop: 20, textAlign: 'center', fontFamily: 'OpenSans_800ExtraBold' },
  description: {
    fontSize: 20,
    marginTop: 40,
    lineHeight: 35,
    textAlign: 'center',
    marginHorizontal: 15,
    fontFamily: 'OpenSans_400Regular',
  },
  actions: {
    marginTop: 30,
  },
  card: {
    width: '100%',
    paddingTop: 30,
    borderRadius: 35,
    borderTopWidth: 0,
    paddingBottom: 25,
    borderColor: '#fafafa',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
  },
});

export default InitialPage;
