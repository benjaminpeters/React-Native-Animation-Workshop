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
    </ScrollView>
  );
};
