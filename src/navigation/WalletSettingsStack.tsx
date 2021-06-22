import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WalletCurrency} from '~components';
import {WalletSettings} from '~screens';
import Yes from './Yes';
import {colors, hp} from '~utils';

const Stack = createStackNavigator();

function WalletSettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletSettingsStack"
        component={WalletSettings}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="WalletCurrency"
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
        component={WalletCurrency}
      />
    </Stack.Navigator>
  );
}

export default WalletSettingsStack;
