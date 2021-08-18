import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, TouchableOpacity, FlatList, Animated} from 'react-native';
import {Text, Divider, Surface, Searchbar} from 'react-native-paper';
import styles from './styles';

/* files and utils */
import {colors, hp, sizes} from '~utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch} from '~redux/reduxhooks';
import {fonts} from '~utils/fonts';
import {setCurrency, setSymbol} from '~redux/userSlice';

interface currencyProps {
  onClose: () => void;
}

const CurrencyPicker = (props: currencyProps) => {
  const dispatch = useAppDispatch();
  const [currencies, setCurrencies] = useState<[] | any>([]);
  const [filtered, setFiltered] = useState('');
  const animation = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    animateMounting();
  }, []);

  const animateMounting = () => {
    Animated.timing(animation, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const ItemSeperator = () => {
    return <Divider style={styles.divide} />;
  };

  const getItemLayout = useCallback(
    (data, index) => ({
      length: hp(4),
      offset: hp(4) * index,
      index,
    }),
    [],
  );

  const handlePress = (item: any) => {
    dispatch(setCurrency(item.name));
    dispatch(setSymbol(item.symbol.grapheme));
    props.onClose();
  };

  const renderItem = useCallback(
    ({item}) => (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={styles.currencyItem}>
          <Text style={[fonts.caption, styles.id]}>
            {' '}
            {item.id} ({item.symbol.grapheme})
          </Text>
          <Text style={[fonts.caption, styles.name]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  const filteredArray = filtered
    ? currencies.filter((value: any) =>
        value.name.toLowerCase().includes(filtered.toLowerCase()),
      )
    : currencies;

  return (
    <Animated.View style={{transform: [{translateY: animation}]}}>
      <Surface style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={props.onClose}>
            <Icon
              name="close"
              size={sizes.navigationIconSize}
              color={colors.PRIMARY}
            />
          </TouchableOpacity>
          <Searchbar
            placeholder="Search currency"
            style={styles.searchBar}
            inputStyle={sizes.fonts.textInput}
            onChangeText={text => setFiltered(text)}
            value={filtered}
          />
        </View>
        <FlatList
          data={filteredArray}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeperator}
          getItemLayout={getItemLayout}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={23}
          windowSize={30}
        />
      </Surface>
    </Animated.View>
  );
};

export default CurrencyPicker;
