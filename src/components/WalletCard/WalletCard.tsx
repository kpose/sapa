import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

/* utils and files */
import {Text, Surface} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '~utils';
import {useAppDispatch, useAppSelector} from '~redux/reduxhooks';
import {color} from 'react-native-reanimated';
import {setWalletData} from '~redux/walletSlice';

interface Props {
  title: string;
  uid: string;
  transactions: [];
  refresh?: () => void;
}

const WalletCard = ({title, uid, transactions, refresh}: Props) => {
  const navigation = useNavigation();
  const {symbol} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const getTotal = () => {
    if (transactions.length === 0) {
      return;
    }
    const transact = transactions
      .map(item => item.amount)
      .reduce((prev, next) => Number(prev) + Number(next));
    return transact;
  };
  const Total = getTotal();

  const openWallet = () => {
    navigation.navigate('BottomTabs', {
      screen: 'WalletDetails',
      params: {
        uid,
        title,
        transactions,
        Total,
        refresh,
      },
    });

    dispatch(setWalletData({uid, transactions, title}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openWallet}>
        <Surface style={styles.surface}>
          <View style={[styles.myWallet]}>
            <Text style={[fonts.bodyText, styles.wallet]}>{title}</Text>
            <Text
              style={[
                fonts.caption,
                {color: Total < -0 ? colors.WARNING : colors.WHITE},
              ]}>
              {symbol} {Total}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.days}>
              <Text style={[fonts.smallerCaption]}>Last 30 days</Text>
              <Text style={[fonts.caption]}>{symbol} 0.00</Text>
            </View>

            <View>
              <Text style={[fonts.smallerCaption]}>Last 7 days</Text>
              <Text style={[fonts.caption]}>{symbol} 0.00</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('AddToWallet', {
                uid,
                title,
                refresh,
              })
            }>
            <Icon
              name="plus"
              size={sizes.navigationIconSize}
              color={colors.WHITE}
            />
          </TouchableOpacity>
        </Surface>
      </TouchableOpacity>
    </View>
  );
};

export default WalletCard;
