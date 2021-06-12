import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddToWallet, Settings, AddToWalletToo} from '~screens';
import BottomTabNavigator from './BottomTabNavigator';
import {WavyHeader, TabHeader} from '~components';
import SettingsStack from './SettingsStack';
import {colors, hp} from '~utils';
import {RouteStackParams} from '~definitions/navigationTypes';
import Routed from '../navigation/Routed';

const Stack = createStackNavigator<RouteStackParams>();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        options={({navigation}) => ({
          header: () => (
            <WavyHeader
              onSettingsPress={() => navigation.navigate('SettingsStack')}
            />
          ),
        })}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={({navigation, route}) => ({
          header: () => (
            <TabHeader
              onBackPress={() => navigation.goBack()}
              onPlusPress={() =>
                navigation.navigate('AddToWalletToo', {
                  params: route.params,
                })
              }
              data={route.params}
              navigation={navigation}
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

      <Stack.Screen
        name="AddToWalletToo"
        options={{headerShown: false}}
        component={AddToWalletToo}
      />

      <Stack.Screen
        name="SettingsStack"
        options={{
          headerShown: false,
        }}
        component={SettingsStack}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

/* uid: route.params.uid,
                  title: route.params.title,
                  refresh: route.params.refresh, */

/*  navigation.navigate('AddToWalletToo', {
                    data: route.params,
                  }); */
