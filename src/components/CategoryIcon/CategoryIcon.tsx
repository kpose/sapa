import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';

interface Props {
  icon: string;
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryIcon = ({icon, title, color, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        <MaterialCommunityIcons
          name={icon}
          size={sizes.navigationIconSize}
          color={colors.WHITE}
        />
      </View>
      <Text style={[fonts.smallerCaption, {fontWeight: 'bold'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryIcon;
