import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home';
import {Basics} from './Screens/Basics';

const linking = {
  config: {
    screens: {
      Home: '',
      Basics: 'basics',
    },
  },
  prefixes: ['rnskia://'],
};

const Stack = createNativeStackNavigator();

const NavigationTree = () => {
  return (
    <NavigationContainer linking={linking}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTree;
