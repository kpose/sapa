import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

/* utils and files */
import {Text, Surface} from 'react-native-paper';
import {TotalValues} from '~components';
import {fonts} from '~utils/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes, last30Days, last7Days, walletTotal} from '~utils';
import {useAppDispatch} from '~redux/reduxhooks';
import {setWalletData} from '~redux/walletSlice';

interface Props {
  data: {
    title: string;
    walletId: string;
    transactions: [];
  };
}

const WalletCard = ({data}: Props) => {
  const {title, walletId, transactions} = data;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const Total = walletTotal(transactions);
  const last30DaysTotal = last30Days(transactions);
  const last7DaysTotal = last7Days(transactions);

  const openWallet = () => {
    navigation.navigate('BottomTabs', {
      screen: 'WalletDetails',
      params: {
        data,
        title,
        Total,
        last30DaysTotal,
        last7DaysTotal,
      },
    });
    dispatch(
      setWalletData({walletId, walletTransactions: transactions, title}),
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openWallet}>
        <Surface style={styles.surface}>
          <View style={[styles.myWallet]}>
            <Text style={[fonts.itemTitle, styles.wallet]}>{title}</Text>
            <TotalValues value={Total} color={colors.PRIMARY} />
          </View>

          <View style={styles.footer}>
            <View style={styles.days}>
              <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
                Last 30 days
              </Text>
              <TotalValues
                value={last30DaysTotal}
                color={last30DaysTotal < -0 ? colors.WARNING : colors.PRIMARY}
              />
            </View>

            <View>
              <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
                Last 7 days
              </Text>
              <TotalValues
                value={last7DaysTotal}
                color={last7DaysTotal < -0 ? colors.WARNING : colors.PRIMARY}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('AddToWallet', {
                walletId,
                title,
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
