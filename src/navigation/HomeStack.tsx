import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddToWallet, AddToWalletToo, EditWallet} from '~screens';
import BottomTabNavigator from './BottomTabNavigator';
import {WavyHeader, TabHeader} from '~components';
import SettingsStack from './SettingsStack';
import {colors, hp} from '~utils';
import {RouteStackParams} from '~definitions/navigationTypes';

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
        name="EditWallet"
        options={{headerShown: false}}
        component={EditWallet}
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
