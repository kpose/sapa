import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChartTopTabsParams} from '~definitions/navigationTypes';
import {ExpensePieChart, IncomePieChart, TopTabBar} from '~components';

const Tab = createMaterialTopTabNavigator<ChartTopTabsParams>();

function ChartNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TopTabBar {...props} />}>
      <Tab.Screen name="Expense" component={ExpensePieChart} />
      <Tab.Screen name="Income" component={IncomePieChart} />
    </Tab.Navigator>
  );
}

export default ChartNavigator;
