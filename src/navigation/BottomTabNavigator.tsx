import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {BottomTabParams} from '~definitions/navigationTypes';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator<BottomTabParams>();

import {
  WalletBudget,
  WalletDetails,
  WalletSettings,
  WalletCalender,
  WalletChart,
} from '../screens';
import ChartNavigator from './ChartNavigator';
import WalletSettingsStack from './WalletSettingsStack';
import {colors, sizes} from '../utils';

function BottomTabs() {
  return (
    <Tab.Navigator labeled={false} activeColor={colors.SECONDARY}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="navicon" color={color} size={19} />
          ),
        }}
        name="WalletDetails"
        component={WalletDetails}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="calendar" color={color} size={19} />
          ),
        }}
        name="WalletCalender"
        component={WalletCalender}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bar-chart" color={color} size={19} />
          ),
        }}
        name="WalletChart"
        component={ChartNavigator}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="money" color={color} size={19} />
          ),
        }}
        name="WalletBudget"
        component={WalletBudget}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="gear" color={color} size={20} />,
        }}
        name="WalletSettings"
        component={WalletSettingsStack}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
