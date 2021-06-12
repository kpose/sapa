import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import CategoryIcon from '../CategoryIcon/CategoryIcon';
import iconPack from '../../assets/iconPack';

interface Props {
  onClose: any;
  title: any;
  category: any;
}

const TransactionCategory = ({onClose, title, category}: Props) => {
  const selectIcon = (icon: string, cat: string) => {
    onClose();
    title(icon);
    category(cat);
  };

  const renderCategories = useCallback(
    ({item}) => (
      <CategoryIcon
        key={item.title}
        color={item.color}
        title={item.title}
        icon={item.icon}
        onPress={() => selectIcon(item.icon, item.title)}
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
