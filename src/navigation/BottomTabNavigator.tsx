import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeTabParams} from '../definitions/navigationTypes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator<HomeTabParams>();

import {
  WalletBudget,
  WalletCalender,
  WalletChart,
  WalletDetails,
  WalletSettings,
} from '../screens';
import {colors} from '../utils';

function WalletTabs() {
  return (
    <Tab.Navigator labeled={false} activeColor={colors.SECONDARY}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
        name="WalletDetails"
        component={WalletDetails}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="calendar-today" color={color} size={26} />
          ),
        }}
        name="WalletCalender"
        component={WalletCalender}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="chart-bar-stacked" color={color} size={26} />
          ),
        }}
        name="WalletChart"
        component={WalletChart}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="cash" color={color} size={26} />,
        }}
        name="WalletSettings"
        component={WalletSettings}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="cog-outline" color={color} size={26} />
          ),
        }}
        name="WalletBudget"
        component={WalletBudget}
      />
    </Tab.Navigator>
  );
}

export default WalletTabs;
