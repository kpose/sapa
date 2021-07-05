import React, {useState, useContext} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, TextInput, Portal, Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NetworkErorModal} from '~modals';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {TextInputMask} from 'react-native-masked-text';
import styles from './styles';

/* files and utils */
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';
import {ThemeContext} from '~context/ThemeCotext';
import {NetworkContext} from '~context/NetworkContext';
import {
  Spinner,
  TransactionCategory,
  AmountError,
  NetworkError,
} from '~components';
import {setCategory, setImage, setAmount} from '~redux/expenseSlice';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
import {getImageUrl} from '~utils/getImageUrl';

interface WalletProps {
  amount?: number | string;
  category?: string;
  createdAt?: string;
  iconTitle?: string;
  imageUrl?: string;
  marchant?: string;
  note?: string;
  type?: string;
}
interface Props {
  closeScreen: () => void;
  type: string;
  value: string;
  icon: string;
  oldTransaction: WalletProps;
}

const EditWalletHeader = ({
  closeScreen,
  type,
  value,
  icon,
  oldTransaction,
}: Props) => {
  const [xpense, setXpense] = useState(type === 'Expense' ? true : false);
  const [transactionAmount, setTransactionAmount] = useState<string>(value);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [iconName, setIconName] = useState(icon);
  const {theme} = useContext(ThemeContext);
  const {isConnected} = useContext(NetworkContext);
  const dispatch = useAppDispatch();

  const {symbol} = useAppSelector(state => state.user);
  const {data} = useAppSelector(state => state.wallet);
  const {note, marchant, category, image, amount, date, iconTitle} =
    useAppSelector(state => state.expense);

  const walletID = data.uid;
  const walletTransactions = data.walletTransactions;

  console.log(value);

  const transaction = async () => {
    //setLoading(true);

    /* if (!isConnected) {
      return;
    } */

    const uploadedUrl = await getImageUrl(image);

    const newTransaction: WalletProps = {
      amount: amount ? amount : value,
      category: category ? category : oldTransaction.category,
      createdAt: date ? date : oldTransaction.createdAt,
      iconTitle: iconTitle ? iconTitle : oldTransaction.iconTitle,
      imageUrl: uploadedUrl ? uploadedUrl : oldTransaction.imageUrl,
      marchant: marchant ? marchant : oldTransaction.marchant,
      note: note ? note : oldTransaction.note,
      type: type ? type : oldTransaction.type,
    };

    const oldTransact = JSON.stringify(oldTransaction);
    const newTransact = JSON.stringify(newTransaction);

    if (oldTransact === newTransact) {
      closeScreen();
    }

    await firestore().collection('wallets').doc(`${walletID}`).update({
      transactions: [],
    });

    //delete old transaction
    /* await firestore()
      .collection('wallets')
      .doc(`${walletID}`)
      .update({
        transactions: firestore.FieldValue.arrayRemove(oldTransaction),
      }); */
    //setLoading(false);

    //Add new transaction
    /* firestore()
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
      }); */
  };

  /* const saveTransaction = () => {
    if (transactionAmount && transactionAmount > 0) {
      transaction();
    } else {
      setAmountError(true);
    }
  }; */

  const saveTransaction = () => {
    transaction();
  };

  const changeAmount = (amount: any) => {
    dispatch(setAmount(amount));
    setTransactionAmount(amount);
  };

  return (
    <>
      {loading && <Spinner />}
      {uploading && <Spinner />}
      {!isConnected && <NetworkErorModal />}
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
            onClose={() => setShowmodal(false)}
            title={(val: string) => setIconName(val)}
            category={(val: string) => dispatch(setCategory(val))}
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
          <TextInputMask
            type={'money'}
            value={transactionAmount}
            maxLength={20}
            options={{
              precision: 0,
              //separator: '.',
              delimiter: ',',
              unit: xpense ? `- ${symbol}` : `+ ${symbol}`,
            }}
            onChangeText={x => changeAmount(x)}
            style={[styles.input, fonts.bodyText]}
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

/* const newTransaction = {
  note,
  marchant,
  amount: xpense ? expenditure : income,
  type: xpense ? 'Expense' : 'Income',
  createdAt: new Date().toISOString(),
  category: category ? category : 'Others',
  imageUrl: uploadedUrl ? uploadedUrl : null,
} */
