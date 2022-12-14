import React from 'react';
import {ScrollView} from 'react-native';

import {HomeScreenButton} from './HomeScreenButton';

export const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeScreenButton
        title="Basic"
        description="Some simple rotation and animations"
        route="Basics"
      />
      <HomeScreenButton
        title="PanGestureHandler"
        description="Messing around with PanGestureHandler"
        route="PanGestureHandler"
      />
      <HomeScreenButton
        title="InterpolateScrollView"
        description="Interpolate with ScrollView"
        route="InterpolateScrollView"
      />
      <HomeScreenButton
        title="InterpolateColours"
        description="Interpolate colours"
        route="InterpolateColours"
      />
      <HomeScreenButton
        title="DoubleTap"
        description="DoubleTap like Instagram"
        route="DoubleTap"
      />
      <HomeScreenButton
        title="PanGestureScrollView"
        description="Using PanGestureScrollView to recreate a scrollview"
        route="PanGestureScrollView"
      />
    </ScrollView>
  );
};
