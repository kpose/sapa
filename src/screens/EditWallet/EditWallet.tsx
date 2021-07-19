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
  clearExpense,
} from '~redux/expenseSlice';

const EditWallet = ({navigation, route}: EditWalletStackProps) => {
  const {
    createdAt,
    imageUrl,
    marchant,
    category,
    amount,
    type,
    note,
    iconTitle,
    uuid,
  } = route.params;

  const dispatch = useAppDispatch();

  interface Props {
    amount?: string;
    category?: string;
    createdAt?: string;
    iconTitle?: string;
    imageUrl?: string;
    marchant?: string;
    note?: string;
    type?: string;
    uuid: string;
  }

  const transactionItem: Props = {
    amount,
    category,
    createdAt,
    iconTitle,
    imageUrl,
    marchant,
    note,
    type,
    uuid,
  };

  const closeScreen = () => {
    navigation.goBack();
    dispatch(clearExpense());
  };

  return (
    <View style={styles.container}>
      <EditWalletHeader
        closeScreen={closeScreen}
        type={type}
        value={amount}
        icon={iconTitle}
        oldTransaction={transactionItem}
      />
      <EditWalletBody
        date={createdAt}
        marchant={marchant}
        note={note}
        image={imageUrl}
        transactionItem={transactionItem}
        closeScreen={closeScreen}
      />
    </View>
  );
};

export default EditWallet;
