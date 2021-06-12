import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../screens';
import HomeStack from './HomeStack';
import {RouteStackParams} from '../definitions/navigationTypes';

const Stack = createStackNavigator<RouteStackParams>();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
}

export default Routes;
