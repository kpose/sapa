import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingsStackParams} from '~definitions/navigationTypes';
import {WalletDetails} from '~screens';
import Yes from './Yes';
import {colors, hp} from '~utils';

const Stack = createStackNavigator();

function WalletSettingsStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="WalletSettingsStack" component={Yes} />

      <Stack.Screen
        name="yes"
        options={{
          headerTitle: 'Language',
        }}
        component={Yes}
      />
    </Stack.Navigator>
  );
}

export default WalletSettingsStack;
