import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingsStackParams} from '~definitions/navigationTypes';
import {
  Settings,
  ProfileSettings,
  LanguageSettings,
  CurrencySettings,
} from '~screens';
import {colors, hp} from '~utils';

const Stack = createStackNavigator<SettingsStackParams>();

function SettingsStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Settings"
        options={{
          headerStyle: {
            backgroundColor: colors.PRIMARY,
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.WHITE,
        }}
        component={Settings}
      />

      <Stack.Screen
        name="ProfileSettings"
        options={{
          headerStyle: {
            backgroundColor: colors.PRIMARY,
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.WHITE,
          headerTitle: 'Profile',
        }}
        component={ProfileSettings}
      />

      <Stack.Screen
        name="CurrencySettings"
        options={{
          headerStyle: {
            backgroundColor: colors.PRIMARY,
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.WHITE,
          headerTitle: 'Currency',
        }}
        component={CurrencySettings}
      />

      <Stack.Screen
        name="LanguageSettings"
        options={{
          headerStyle: {
            backgroundColor: colors.PRIMARY,
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.WHITE,
          headerTitle: 'Language',
        }}
        component={LanguageSettings}
      />
    </Stack.Navigator>
  );
}

export default SettingsStack;
