import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddToWallet} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import {WavyHeader, TabHeader} from '../components';
import {hp} from '../utils';
import {RouteStackParams} from '../definitions/navigationTypes';

const Stack = createStackNavigator<RouteStackParams>();

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
          header: () => (
            <TabHeader
              onBackPress={() => navigation.goBack()}
              onPlusPress={() => navigation.navigate('AddToWallet')}
            />
          ),
          headerStyle: {
            height: hp(20),
          },
        })}
        name="BottomTabs"
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="AddToWallet"
        options={{headerShown: false}}
        component={AddToWallet}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
