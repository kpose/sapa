import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import {colors, hp, sizes, wp} from '~utils';
import Wave from './Wave';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Surface, Divider} from 'react-native-paper';

import {useAppSelector} from '~redux/reduxhooks';

interface Props {
  onSettingsPress: () => void;
}

const WavyHeader = ({onSettingsPress}: Props) => {
  const {symbol} = useAppSelector(state => state.user);
  return (
    <View style={[styles.container]}>
      <Wave
        customStyles={styles.svgCurve}
        customHeight={hp(20)}
        customTop={hp(16)}
        customBgColor={colors.PRIMARY}
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={[styles.titleContainer]}>
        <Text style={[sizes.fonts.heading]}>Wallets</Text>
        <TouchableOpacity onPress={onSettingsPress}>
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
          <Text style={[sizes.fonts.smallerCaption, styles.price]}>
            {symbol} 0
          </Text>
        </View>
        <Divider style={{height: hp(5), width: wp(1)}} />
        <View style={styles.title}>
          <Text style={[sizes.fonts.smallerCaption]}>Last 30 days</Text>
          <Text style={[sizes.fonts.smallerCaption, styles.price]}>
            {symbol} 0
          </Text>
        </View>
        <Divider style={{height: hp(5), width: wp(1)}} />
        <View style={styles.title}>
          <Text style={[sizes.fonts.smallerCaption]}>Last 7 days</Text>
          <Text style={[sizes.fonts.smallerCaption, styles.price]}>
            {symbol} 0
          </Text>
        </View>
      </Surface>
    </View>
  );
};

export default WavyHeader;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
    position: 'absolute',
  },
  surface: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderWidth: wp(0.5),
    top: hp(10),
    height: hp(10),
    left: wp(5),
    right: wp(5),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: hp(5),
    left: wp(5),
    right: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
  },
  svgCurve: {
    //position: 'absolute',
    width: wp(100),
  },
  title: {
    alignItems: 'center',
  },
  price: {
    marginTop: hp(0.7),
  },
});
