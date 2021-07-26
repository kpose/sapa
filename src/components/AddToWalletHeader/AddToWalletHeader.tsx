import React, {useState, useContext, useEffect} from 'react';
import {View, SafeAreaView, Pressable, TextInput} from 'react-native';
import {Text, Portal, Modal} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';
import {v4 as uuidv4} from 'uuid';
import styles from './styles';
import {Spinner, TransactionCategory, AmountError} from '~components';

/* files and utils */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes, uploadedImage} from '~utils';
import {fonts} from '~utils/fonts';
import {ThemeContext} from '~context/ThemeCotext';
import {setCategory, setImage, setIconTitle} from '~redux/expenseSlice';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
import firestore from '@react-native-firebase/firestore';

import CurrencyInput from 'react-native-currency-input';

interface Props {
  closeScreen: () => void;
  walletID: string;
}

const AddToWalletHeader = ({closeScreen, walletID}: Props) => {
  const [xpense, setXpense] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const {theme} = useContext(ThemeContext);
  const [amountError, setAmountError] = useState(false);
  const dispatch = useAppDispatch();

  const {note, marchant, category, image, iconTitle, date} = useAppSelector(
    state => state.expense,
  );
  const {symbol} = useAppSelector(state => state.user);

  const saveTransaction = async () => {
    if (!amount) {
      setAmountError(true);
      return;
    }

    setLoading(true);
    const uploadedUrl = await uploadedImage(image);

    const newTransaction = {
      note,
      marchant,
      amount,
      uuid: uuidv4(),
      type: xpense ? 'Expense' : 'Income',
      createdAt: date ? date : new Date().toISOString(),
      category: category ? category : 'Others',
      imageUrl: uploadedUrl ? uploadedUrl : null,
      iconTitle: iconTitle ? iconTitle : 'bullseye',
    };

    firestore()
      .collection('wallets')
      .doc(`${walletID}`)
      .update({
        transactions: firestore.FieldValue.arrayUnion(newTransaction),
      })
      .then(response => {
        setLoading(false);
        closeScreen();
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const closeModal = () => {
    setShowmodal(false);
  };

  const saveTitle = (title: string) => {
    setTitle(title);
    dispatch(setIconTitle(title));
  };

  const saveCategory = (cate: string) => {
    //dispatch category here
    dispatch(setCategory(cate));
  };

  const dismissError = () => {
    setAmountError(false);
  };

  /* const setIncome = () => {
    setXpense(false);
    setAmount(`+ ${amount}`);
  }; */

  return (
    <>
      {loading && <Spinner />}
      <AmountError visible={amountError} dismiss={dismissError} />
      <Portal>
        <Modal
          visible={showmodal}
          onDismiss={() => setShowmodal(false)}
          contentContainerStyle={[
            styles.modal,
            {
              backgroundColor:
                theme.type === 'dark' ? colors.DARK_GRAY : colors.WHITE,
            },
          ]}>
          <TransactionCategory
            onClose={closeModal}
            title={(val: string) => saveTitle(val)}
            category={(val: string) => saveCategory(val)}
          />
        </Modal>
      </Portal>

      <View
        style={[
          styles.container,
          {backgroundColor: xpense ? colors.SECONDARY : colors.PRIMARY},
        ]}>
        <SafeAreaView style={styles.headRow}>
          <Pressable onPress={closeScreen}>
            <Icon
              name="close-thick"
              size={sizes.regularIconSize}
              color={colors.WHITE}
            />
          </Pressable>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setXpense(true)}
              style={[
                styles.expense,
                {
                  backgroundColor: xpense ? colors.SECONDARY : 'transparent',
                },
              ]}>
              <Text style={[fonts.caption]}>Expense</Text>
            </Pressable>

            <Pressable
              style={[
                styles.expense,
                {
                  backgroundColor: xpense ? 'transparent' : colors.PRIMARY,
                },
              ]}
              onPress={() => setXpense(false)}>
              <Text style={[fonts.caption]}>Income</Text>
            </Pressable>
          </View>

          {/* submit new transaction */}
          <Pressable onPress={saveTransaction}>
            <Icon
              name="check-bold"
              size={sizes.regularIconSize}
              color={colors.WHITE}
            />
          </Pressable>
        </SafeAreaView>

        <View style={styles.bottomRow}>
          <TextInputMask
            type={'money'}
            //value={xpense ? `- ${amount}` : `+ ${amount}`}
            value={amount}
            //autoFocus={true}
            maxLength={20}
            placeholder={`${symbol} 0.00`}
            options={{
              precision: 0,
              //separator: '.',
              delimiter: ',',
              unit: xpense ? `- ${symbol}` : `+ ${symbol}`,
            }}
            onChangeText={x => {
              setAmount(x);
            }}
            style={[styles.input, fonts.bodyText]}
          />
          <Pressable style={styles.icon} onPress={() => setShowmodal(true)}>
            <Icon
              name={title ? title : 'bullseye'}
              size={sizes.regularIconSize}
              color={colors.SECONDARY}
            />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default AddToWalletHeader;
