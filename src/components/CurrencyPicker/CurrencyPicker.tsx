import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {Searchbar, ActivityIndicator, Surface, Text} from 'react-native-paper';

/* utils and files */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '../../utils';
import {Currencies} from '../../definitions/currency';
const currencyJson = require('../../assets/currencies.json');

interface currencyProps {
  onClose: any;
  currency?: string;
}

const CurrencyPicker = (props: currencyProps) => {
  const [currencies, setCurrencies] = useState(currencyJson);
  const [filteredCurrencies, setFilteredCurrencies] = useState('');

  useEffect(() => {
    setFilteredCurrencies(currencyJson);
  }, [currencies]);

  const renderCurrency = Object.entries(filteredCurrencies).map(
    ([currency, info]: any) => {
      return (
        <>
          <TouchableOpacity /* onPress={() => console.log(info.name)} */>
            <View key={info.symbol.grapheme} style={styles.picker}>
              <Text style={[sizes.fonts.caption]}>{currency}</Text>
              <Text style={[sizes.fonts.smalerCaption, styles.name]}>
                {info.name}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divide} />
        </>
      );
    },
  );

  async function onFilter(value: string) {
    if (!value || value === undefined || value === '') {
      setFilteredCurrencies(currencies);
    } else {
      const filtered = await filterCurrencies(value);
      setFilteredCurrencies(filtered);
    }
  }

  async function filterCurrencies(
    filter: string,
  ): Promise<Currencies | undefined> {
    if (!currencies) {
      return undefined;
    }
    const results: Currencies = Object.keys(currencies)
      .filter((key: string) => {
        return (
          key.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          (currencies[key].name &&
            currencies[key].name.toLowerCase().indexOf(filter.toLowerCase()) >
              -1)
        );
      })
      .reduce((obj: Currencies, key: string) => {
        obj[key] = currencies[key];
        return obj;
      }, {});
    return results;
  }

  return (
    <Surface style={styles.container}>
      {filteredCurrencies ? (
        <>
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={props.onClose}>
              <Icon
                name="close"
                style={styles.cancelIcon}
                size={sizes.regularIconSize}
              />
            </TouchableOpacity>
            <Searchbar
              placeholder="Filter"
              style={styles.search}
              onChangeText={onFilter}
              //value={filteredCurrencies}
              inputStyle={sizes.fonts.bodyText}
            />
          </View>
          <ScrollView>{renderCurrency}</ScrollView>
        </>
      ) : (
        <ActivityIndicator
          animating={true}
          size={sizes.navigationIconSize}
          color={colors.PRIMARY}
          //style={styles.indicator}
        />
      )}
    </Surface>
  );
};

export default CurrencyPicker;
