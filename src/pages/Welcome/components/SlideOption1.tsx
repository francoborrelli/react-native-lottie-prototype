import { Card, Layout } from '@ui-kitten/components';

import type { FC } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';

import type { SliderItemInterface } from '../types';

export const InitialPage: FC<SliderItemInterface> = (props) => {
  const { item } = props;
  return (
    <Layout style={[styles.container, { backgroundColor: item.backgroundColor }]}>
      <View></View>
      <View></View>

      {/* Animation */}
      {item.animation ? (
        <LottieView
          style={{
            width: 250,
            height: 250,
          }}
          source={item.animation.source}
          loop={item.animation.autoPlay}
          autoPlay={item.animation.autoPlay}
        />
      ) : null}

      <Card style={[styles.card, styles.shadowProp]}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description}>{item.text}</Text>

        {item.actions ? <View style={styles.actions}>{item.actions}</View> : null}
      </Card>
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
    backgroundColor: 'white',
    paddingTop: 10,
    borderRadius: 35,
    paddingBottom: 60,
    borderColor: '#fafafa',
    // paddingHorizontal: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});

export default InitialPage;
