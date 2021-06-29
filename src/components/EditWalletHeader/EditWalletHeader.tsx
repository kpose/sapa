import React, {useState, useContext, useEffect} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, TextInput, Portal, Modal} from 'react-native-paper';
import styles from './styles';
import {Spinner, TransactionCategory, AmountError} from '~components';

/* files and utils */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';
import {ThemeContext} from '~context/ThemeCotext';
import {setCategory, setImage, setAmount} from '~redux/expenseSlice';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import CurrencyInput from 'react-native-currency-input';

interface Props {
  closeScreen: () => void;
  walletID?: string;
  type: string;
  value: string;
  icon: string;
}

const EditWalletHeader = ({
  closeScreen,
  walletID,
  type,
  value,
  icon,
}: Props) => {
  const [xpense, setXpense] = useState(type === 'Expense' ? true : false);
  const [loading, setLoading] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState(Number(value));
  const [iconName, setIconName] = useState(icon);
  const {theme} = useContext(ThemeContext);
  const [amountError, setAmountError] = useState(false);
  const dispatch = useAppDispatch();
  const [uploading, setUploading] = useState(false);

  const {note, marchant, category, image} = useAppSelector(
    state => state.expense,
  );

  const {symbol} = useAppSelector(state => state.user);

  const expenditure = '-' + transactionAmount;
  const income = '+' + transactionAmount;

  const transaction = async () => {
    setLoading(true);
    const uploadImage = async (uri: string) => {
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const imageRef = storage().ref(filename);
      await imageRef.putFile(uri, {contentType: 'image/jpg'}).catch(error => {
        console.log(error);
      });
      const url = await imageRef.getDownloadURL().catch(error => {
        console.log(error);
      });
      return url;
    };

    const uploadedUrl = await uploadImage(image);

    const newTransaction = {
      note,
      marchant,
      amount: xpense ? expenditure : income,
      type: xpense ? 'Expense' : 'Income',
      createdAt: new Date().toISOString(),
      category: category ? category : 'Others',
      imageUrl: uploadedUrl ? uploadedUrl : null,
    };
    setLoading(true);

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
      });
    setLoading(false);
  };

  const saveTransaction = () => {
    if (transactionAmount && transactionAmount > 0) {
      transaction();
    } else {
      setAmountError(true);
    }
  };

  const closeModal = () => {
    setShowmodal(false);
  };

  const saveTitle = (title: string) => {
    setIconName(title);
  };

  const saveCategory = (cate: string) => {
    dispatch(setCategory(cate));
  };

  const changeAmount = (amount: number) => {
    dispatch(setAmount(amount));
    setTransactionAmount(amount);
  };

  return (
    <>
      {loading && <Spinner />}
      {uploading && <Spinner />}
      <AmountError
        visible={amountError}
        dismiss={() => setAmountError(false)}
      />
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
          <TouchableOpacity onPress={closeScreen}>
            <Icon
              name="close-thick"
              size={sizes.regularIconSize}
              color={colors.WHITE}
            />
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setXpense(true)}
              style={[
                styles.expense,
                {
                  backgroundColor: xpense ? colors.SECONDARY : 'transparent',
                },
              ]}>
              <Text style={[fonts.caption]}>Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.expense,
                {
                  backgroundColor: xpense ? 'transparent' : colors.PRIMARY,
                },
              ]}
              onPress={() => setXpense(false)}>
              <Text style={[fonts.caption]}>Income</Text>
            </TouchableOpacity>
          </View>

          {/* submit new transaction */}
          <TouchableOpacity onPress={saveTransaction}>
            <Icon
              name="check-bold"
              size={sizes.regularIconSize}
              color={colors.WHITE}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.bottomRow}>
          <CurrencyInput
            value={transactionAmount}
            onChangeValue={(x: number) => changeAmount(x)}
            prefix={xpense ? `- ${symbol}` : `+ ${symbol}`}
            delimiter=","
            separator="."
            precision={2}
            style={[styles.input, fonts.bodyText]}
            maxLength={20}
            selectionColor={xpense ? colors.PRIMARY : colors.SECONDARY}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowmodal(true)}>
            <Icon
              name={iconName ? iconName : 'bullseye'}
              size={sizes.regularIconSize}
              color={xpense ? colors.SECONDARY : colors.PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default EditWalletHeader;
