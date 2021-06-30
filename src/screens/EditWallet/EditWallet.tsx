import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

/* utils and files */
import {EditWalletStackProps} from '~definitions/navigationTypes';
import {EditWalletHeader, EditWalletBody} from '~components';
import {useAppDispatch} from '~redux/reduxhooks';
import {
  setAmount,
  setCategory,
  setDate,
  setIconTitle,
  setImage,
  setMarchant,
  setNote,
} from '~redux/expenseSlice';

const EditWallet = ({navigation, route}: EditWalletStackProps) => {
  const {date, image, marchant, category, amount, type, note, icon} =
    route.params;
  const dispatch = useAppDispatch();

  interface Props {
    amount?: number;
    category?: string;
    createdAt?: string;
    iconTitle?: string;
    imageUrl?: string;
    marchant?: string;
    note?: string;
    type?: string;
  }

  const transactionItem: Props = {
    amount,
    category,
    createdAt: date,
    iconTitle: icon,
    imageUrl: image,
    marchant,
    note,
    type,
  };

  const closeScreen = () => {
    navigation.goBack();
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
      <EditWalletHeader
        closeScreen={closeScreen}
        type={type}
        value={amount}
        icon={icon}
        oldTransaction={transactionItem}
      />
      <EditWalletBody
        date={date}
        marchant={marchant}
        note={note}
        image={image}
        transactionItem={transactionItem}
        closeScreen={closeScreen}
      />
    </View>
  );
};

export default EditWallet;
