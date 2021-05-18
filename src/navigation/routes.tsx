import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Welcome, Home} from '../screens';
import {RouteStackParams} from '../definitions/navigationTypes';

const Stack = createStackNavigator<RouteStackParams>();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Routes;
