import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';

/* utils and files */
import styles from './styles';
import {Text, Divider} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setCurrency, setSymbol} from '~redux/userSlice';
import {fonts} from '~utils/fonts';
import {hp} from '~utils';
import {SettingsStackProps} from '~definitions/navigationTypes';

const CurrencySettings = ({navigation}: SettingsStackProps) => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState<[] | any>([]);

  useEffect(() => {
    const json = require('../../assets/currencies.json');
    const list = [];
    for (const k in json) {
      list.push({
        id: k,
        ...json[k],
      });
    }
    setCurrencies(list);
  }, []);

  const selectCurrency = (item: any) => {
    dispatch(setCurrency(item.name));
    dispatch(setSymbol(item.symbol.grapheme));
    navigation.goBack();
  };

  const renderItem = useCallback(
    ({item}) => (
      <TouchableOpacity onPress={() => selectCurrency(item)}>
        <View style={styles.currency}>
          <Text style={[styles.id, fonts.caption]}> {item.id}</Text>
          <Text style={[styles.name, fonts.smallerCaption]}>({item.name})</Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );
  const keyExtractor = useCallback(item => item.id.toString(), []);

  const ItemSeperator = () => {
    return <Divider style={styles.divide} />;
  };
  const getItemLayout = useCallback(
    (data, index) => ({
      length: hp(5.3),
      offset: hp(5.3) * index,
      index,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={currencies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeperator}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={23}
        windowSize={30}
      />
    </View>
  );
};

export default CurrencySettings;
