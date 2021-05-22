import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';

/* utils and files */
import styles from './styles';
import {Text} from 'react-native-paper';
import {colors, sizes} from '../../utils';
import {useDispatch} from 'react-redux';
import {setCurrency} from '../../redux/userReducer';
const currencyJson = require('../../assets/currencies.json');

interface currencyProps {
  onClose: any;
  currency?: string;
}

const CurrencySettings = (props: currencyProps) => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState(currencyJson);
  const juju = [];

  juju.push(currencyJson);
  console.log(juju);

  return <View style={styles.container}></View>;
};

export default CurrencySettings;
