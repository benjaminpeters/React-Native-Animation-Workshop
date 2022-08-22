import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

interface Props {
  index: number;
  title: string;
  translateX: Animated.SharedValue<number>;
}

const PAGE_WIDTH = Dimensions.get('window').width;

const Page = ({index, title, translateX}: Props) => {
  const pageOffset = PAGE_WIDTH * index;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value + pageOffset}],
    };
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        rStyle,
        styles.container,
        {backgroundColor: `rgba(0,0,254,0.${index + 2})`},
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

export {PAGE_WIDTH};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 70,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
