import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParams} from '~definitions/navigationTypes';
import {BottomTabBar} from '~components';

import {
  WalletBudget,
  WalletCalender,
  WalletChart,
  WalletDetails,
  WalletSettings,
} from '../screens';
import ChartNavigator from './ChartNavigator';
import WalletSettingsStack from './WalletSettingsStack';

const Tab = createBottomTabNavigator<BottomTabParams>();

function WalletTabs() {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="WalletDetails"
        component={WalletDetails}
        initialParams={{icon: 'menu'}}
      />
      <Tab.Screen
        name="WalletCalender"
        component={WalletCalender}
        initialParams={{icon: 'calendar-today'}}
      />
      <Tab.Screen
        name="WalletChart"
        component={ChartNavigator}
        initialParams={{icon: 'chart-bar-stacked'}}
      />

      <Tab.Screen
        name="WalletBudget"
        component={WalletBudget}
        initialParams={{icon: 'cash'}}
      />

      <Tab.Screen
        name="WalletSettings"
        component={WalletSettingsStack}
        initialParams={{icon: 'cog-outline'}}
      />
    </Tab.Navigator>
  );
}

export default WalletTabs;
