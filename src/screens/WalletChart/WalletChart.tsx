import React from 'react';
import {View, processColor, StyleSheet} from 'react-native';
import {ExpensePieChart} from '~components';

const WalletChart = () => {
  return (
    <View style={{flex: 1}}>
      <ExpensePieChart />
    </View>
  );
};

export default WalletChart;
