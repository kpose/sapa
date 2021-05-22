import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

/* utils and files */
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '../../utils';
import {fonts} from '../../utils/fonts';

interface Props {
  leftIcon: string;
  rightIcon: string;
  title: string;
  onPress?: () => void;
}

const SettingsItem = ({leftIcon, rightIcon, title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Icon
            name={leftIcon}
            color={colors.LIGHT_GRAY}
            style={styles.icon}
            size={sizes.regularIconSize}
          />
          <Text style={[fonts.caption]}>{title}</Text>
        </View>
        <Icon
          name={rightIcon}
          color={colors.LIGHT_GRAY}
          style={styles.rightIcon}
          size={sizes.regularIconSize}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;
