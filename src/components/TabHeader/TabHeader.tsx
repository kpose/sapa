import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, hp, sizes, wp} from '../../utils';
import Wave from './Wave';
import {TotalValues} from '~components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, Surface} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
import {setWalletData} from '~redux/walletSlice';

type Props = {
  //onBackPress: () => void;
  onPlusPress: () => void;
  data?: {[params: string]: any};
  navigation: any;
};

const TabHeader = ({onPlusPress, data, navigation}: Props) => {
  const {Total, last30DaysTotal, last7DaysTotal, title} = data?.params;
  const dispatch = useAppDispatch();

  const goBack = () => {
    navigation.navigate('Home');
    //dispatch(setWalletData({uid: '', walletTransactions: [], title: ''}));
  };

  return (
    <View>
      <Wave
        customStyles={styles.svgCurve}
        customHeight={hp(20)}
        customTop={hp(16)}
        customBgColor={colors.PRIMARY}
        customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      <View style={[styles.titleContainer]}>
        <View style={styles.navigate}>
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons
              name="arrow-back-ios"
              size={sizes.navigationIconSize}
              style={{color: colors.WHITE}}
            />
          </TouchableOpacity>
          <Text style={[sizes.fonts.heading, {marginLeft: wp(1)}]}>
            Wallets
          </Text>
        </View>
        {/* <TouchableOpacity>
          <Icon
            name="magnify"
            size={sizes.regularIconSize}
            style={{color: colors.WHITE}}
          />
        </TouchableOpacity> */}
      </View>

      <Surface style={styles.surface}>
        <View style={[styles.myWallet]}>
          <Text style={[fonts.caption, styles.wallet]}>{title}</Text>
          <TotalValues value={Total} color={colors.PRIMARY} />
        </View>

        <View style={styles.footer}>
          <View style={styles.days}>
            <Text style={[fonts.smallerCaption, {color: colors.LIGHT_GRAY}]}>
              Last 30 days
            </Text>
            <TotalValues
              value={last30DaysTotal}
              color={last30DaysTotal < -0 ? colors.WARNING : colors.PRIMARY}
            />
          </View>

          <View>
            <Text style={[fonts.smallerCaption, {color: colors.LIGHT_GRAY}]}>
              Last 7 days
            </Text>
            <TotalValues
              value={last7DaysTotal}
              color={last7DaysTotal < -0 ? colors.WARNING : colors.PRIMARY}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={onPlusPress}>
          <Icon
            name="plus"
            size={sizes.navigationIconSize}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </Surface>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  surface: {
    position: 'absolute',
    top: hp(9.3),
    left: wp(5),
    right: wp(5),
    height: hp(11.5),
    borderRadius: wp(2),
  },
  titleContainer: {
    position: 'absolute',
    top: hp(5),
    left: wp(5),
    right: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  svgCurve: {
    //position: 'absolute',
    width: wp(100),
  },
  myWallet: {
    marginTop: hp(0.5),
    marginLeft: wp(3),
  },
  wallet: {
    fontWeight: 'bold',
    marginBottom: hp(0.5),
  },
  days: {
    marginRight: wp(20),
  },
  footer: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginLeft: wp(3),
  },
  button: {
    position: 'absolute',
    backgroundColor: colors.SECONDARY,
    right: wp(5),
    top: hp(3),
    borderRadius: 100,
  },
  navigate: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginBottom: hp(1),
  },
});
