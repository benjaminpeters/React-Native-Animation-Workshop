import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface PageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {height, width} = Dimensions.get('window');

const SIZE = width * 0.7;

export const Page = ({title, index, translateX}: PageProps) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );
    return {transform: [{scale: scale}], borderRadius};
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateY,
        },
      ],
      opacity,
    };
  });

  return (
    <View
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[rTextStyle, styles.textContainer]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {height: SIZE, width: SIZE, backgroundColor: 'rgba(0,0,256,0.4)'},
  textContainer: {
    position: 'absolute',
  },
  text: {
    fontSize: 70,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
