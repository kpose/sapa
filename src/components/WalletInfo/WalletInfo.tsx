import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Text} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '../../utils';
import {fonts} from '../../utils/fonts';

type Props = {
  title: string;
  icon: string;
  description: string;
};

const WalletInfo = ({title, icon, description}: Props) => {
  return (
    <View>
      <Text style={[fonts.smallerCaption, styles.title]}>{title}</Text>
      <View style={styles.details}>
        <Icon
          name={icon}
          size={sizes.navigationIconSize}
          color={colors.DARK_GRAY}
          style={styles.icon}
        />
        <Text style={[fonts.caption]}>{description}</Text>
      </View>
    </View>
  );
};

export default WalletInfo;
