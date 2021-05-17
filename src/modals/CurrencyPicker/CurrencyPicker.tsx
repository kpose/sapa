import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {
  Portal,
  Text,
  Modal,
  Divider,
  ActivityIndicator,
  Searchbar,
} from 'react-native-paper';
import styles from './styles';

/* files and utils */
import {Currencies} from '../../definitions/currency';
import {colors, sizes} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setCurrency} from '../../redux/userReducer';
const currencyJson = require('../../assets/currencies.json');

interface currencyProps {
  onClose: any;
  currency?: string;
}

const CurrencyPicker = (props: currencyProps) => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState(currencyJson);
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencyJson);

  useEffect(() => {
    setFilteredCurrencies(currencyJson);
  }, [currencies]);

  const renderCurrency = () => {
    return Object.entries(filteredCurrencies).map(([currency, info]: any) => {
      const handlePress = () => {
        dispatch(setCurrency(info.name));
        props.onClose();
      };

      return (
        <>
          <TouchableOpacity onPress={handlePress}>
            <View key={info.symbol.grapheme} style={styles.picker}>
              <Text style={[sizes.fonts.caption]}>{currency}</Text>
              <Text style={[sizes.fonts.smalerCaption, styles.name]}>
                {info.name}
              </Text>
            </View>
          </TouchableOpacity>
          <Divider style={styles.divide} />
        </>
      );
    });
  };

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
    <Portal>
      <Modal
        visible={true}
        contentContainerStyle={styles.container}
        onDismiss={props.onClose}>
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
            <ScrollView
              keyboardDismissMode="on-drag"
              showsVerticalScrollIndicator={false}>
              {renderCurrency()}
            </ScrollView>
          </>
        ) : (
          <ActivityIndicator
            animating={true}
            size={sizes.navigationIconSize}
            color={colors.PRIMARY}
            style={styles.indicator}
          />
        )}
      </Modal>
    </Portal>
  );
};

export default CurrencyPicker;

/* {
  filteredCurrencies ? (
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
      <ScrollView
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}>
        {renderCurrency}
      </ScrollView>
    </>
  ) : (
    <ActivityIndicator
      animating={true}
      size={sizes.navigationIconSize}
      color={colors.PRIMARY}
      style={styles.indicator}
    />
  );
} */
