import { useRef, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import type { FC } from 'react';
import type { AnimationType } from '../pages/Welcome/types';

interface AnimatedBackgroundProps {
  children: any;
  speed?: number;
  source: AnimationType;
}

export const AnimatedBackground: FC<AnimatedBackgroundProps> = (props) => {
  const { speed } = props;

  const animation = useRef<LottieView>(null);
  useEffect(() => {
    animation.current?.play();

    return () => {};
  }, [animation, speed]);

  return (
    <>
      <LottieView
        loop={false}
        ref={animation}
        resizeMode='cover'
        speed={props.speed}
        style={[styles.image]}
        source={props.source}
      />
      {props.children}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default AnimatedBackground;
