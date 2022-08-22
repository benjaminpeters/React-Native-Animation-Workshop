import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home';
import {Basics} from './Screens/Basics';
import {PanGestureHandlerScreen} from './Screens/PanGestureHandlerScreen';
import {InterpolateScrollView} from './Screens/InterpolateScrollView';
import {InterpolateColours} from './Screens/InterpolateColours';
import {DoubleTap} from './Screens/DoubleTap';
import {PanGestureScrollView} from './Screens/PanGestureScrollView';

const Stack = createNativeStackNavigator();

const NavigationTree = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '🎨 Hello',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{
            title: 'Basics',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="PanGestureHandler"
          component={PanGestureHandlerScreen}
          options={{
            title: 'PanGestureHandler',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="InterpolateScrollView"
          component={InterpolateScrollView}
          options={{
            title: 'InterpolateScrollView',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="InterpolateColours"
          component={InterpolateColours}
          options={{
            title: 'InterpolateColours',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DoubleTap"
          component={DoubleTap}
          options={{
            title: 'DoubleTap',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="PanGestureScrollView"
          component={PanGestureScrollView}
          options={{
            title: 'PanGestureScrollView',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTree;
