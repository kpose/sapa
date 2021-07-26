import React from 'react';
import {View} from 'react-native';
import styles from './styles';

/* utils and files */
import {RouteStackProps} from '~definitions/navigationTypes';
import {AddToWalletHeader, AddToWalletBody} from '~components';
import {useAppDispatch} from '~redux/reduxhooks';
import {clearExpense} from '~redux/expenseSlice';

const AddToWalletToo = ({navigation, route}: RouteStackProps) => {
  const data = route.params.params;
  const {walletId, title} = data.params.data;
  const dispatch = useAppDispatch();

  const closeScreen = () => {
    navigation.goBack();
    dispatch(clearExpense());
  };

  return (
    <View style={styles.container}>
      <AddToWalletHeader closeScreen={closeScreen} walletID={walletId} />
      <AddToWalletBody title={title} />
    </View>
  );
};

export default AddToWalletToo;
