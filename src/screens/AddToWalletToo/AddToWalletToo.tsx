import React from 'react';
import {View} from 'react-native';
import styles from './styles';

/* utils and files */
import {RouteStackProps} from '~definitions/navigationTypes';
import {AddToWalletHeader, AddToWalletBody} from '~components';
import {useAppDispatch} from '~redux/reduxhooks';
import {
  setImage,
  setAmount,
  setCategory,
  setDate,
  setNote,
  setMarchant,
  setIconTitle,
} from '~redux/expenseSlice';

const AddToWalletToo = ({navigation, route}: RouteStackProps) => {
  const data = route.params.params;
  const {uid, title, refreshWallets} = data.params;
  const dispatch = useAppDispatch();

  const closeScreen = () => {
    navigation.goBack();
    dispatch(setImage(''));
    dispatch(setImage(''));
    dispatch(setAmount(0));
    dispatch(setCategory(''));
    dispatch(setDate(''));
    dispatch(setNote(''));
    dispatch(setMarchant(''));
    dispatch(setIconTitle(''));
  };

  return (
    <View style={styles.container}>
      <AddToWalletHeader
        closeScreen={closeScreen}
        walletID={uid}
        //refreshWallets={refreshWallets}
      />
      <AddToWalletBody title={title} />
    </View>
  );
};

export default AddToWalletToo;
