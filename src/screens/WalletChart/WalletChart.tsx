import React from 'react';
import {View, processColor, StyleSheet} from 'react-native';
import {ExpensePieChart} from '~components';
import {Text} from 'react-native-paper';

const WalletChart = () => {
  return (
    <View style={{flex: 1}}>
      <ExpensePieChart />
    </View>
  );
};

export default WalletChart;
