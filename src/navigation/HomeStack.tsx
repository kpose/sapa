import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import {WavyHeader, TabHeader} from '../components';
import {hp} from '../utils';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        options={{header: () => <WavyHeader />}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({navigation}) => ({
          header: () => <TabHeader onBackPress={navigation.goBack} />,
          headerStyle: {
            height: hp(20),
          },
        })}
        name="BottomTabs"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
