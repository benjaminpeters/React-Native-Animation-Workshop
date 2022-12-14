import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  useAnimatedGestureHandler,
  useDerivedValue,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import Page, {PAGE_WIDTH} from './components/Page';

const titles = ['whats', 'up', 'mobile', 'devs'];
const MAX_TRANSLATE_X = -PAGE_WIDTH * (titles.length - 1);

type ContextType = {x: number};

export const PanGestureScrollView = () => {
  const translateX = useSharedValue(0);

  const clampedTranslateX = useDerivedValue(() => {
    return Math.max(Math.min(translateX.value, 0), MAX_TRANSLATE_X);
  });

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = clampedTranslateX.value;
      cancelAnimation(translateX);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: event => {
      translateX.value = withDecay({velocity: event.velocityX});
    },
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={styles.animatedContainer}>
          {titles.map((title, index) => {
            return (
              <Page
                key={index.toString()}
                translateX={clampedTranslateX}
                title={title}
                index={index}
              />
            );
          })}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  animatedContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
