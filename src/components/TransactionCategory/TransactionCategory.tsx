import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import CategoryIcon from '../CategoryIcon/CategoryIcon';
import iconPack from '../../assets/iconPack';

const TransactionCategory = () => {
  const [icons, setIcons] = useState<[] | any>([]);

  /* useEffect(() => {
        setIcons(iconPack);
    }, []); */

  const renderCategories = useCallback(
    ({item}) => (
      <CategoryIcon
        key={item.title}
        color={item.color}
        title={item.title}
        icon={item.icon}
        onPress={() => console.log('pppp')}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.title.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={iconPack}
        renderItem={renderCategories}
        numColumns={4}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TransactionCategory;
