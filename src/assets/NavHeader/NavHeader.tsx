import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Surface, Divider} from 'react-native-paper';
import styles from './styles';

/* utils and files */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, hp, sizes, wp} from '../../utils';

const NavHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.titleContainer]}>
        <Text style={[sizes.fonts.heading]}>Wallets</Text>
        <TouchableOpacity>
          <Icon
            name="cog-outline"
            size={sizes.regularIconSize}
            style={{color: colors.WHITE}}
          />
        </TouchableOpacity>
      </View>

      <Surface style={styles.surface}>
        <View style={styles.title}>
          <Text style={[sizes.fonts.smallerCaption]}>Total</Text>
          <Text style={[sizes.fonts.smallerCaption, styles.price]}>n0</Text>
        </View>
        <Divider style={{height: hp(5), width: wp(1)}} />
        <View style={styles.title}>
          <Text style={[sizes.fonts.smallerCaption]}>Last 30 days</Text>
          <Text style={[sizes.fonts.smallerCaption, styles.price]}>n0</Text>
        </View>
        <Divider style={{height: hp(5), width: wp(1)}} />
        <View style={styles.title}>
          <Text style={[sizes.fonts.smallerCaption]}>Last 7 days</Text>
          <Text style={[sizes.fonts.smallerCaption, styles.price]}>n0</Text>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default NavHeader;
