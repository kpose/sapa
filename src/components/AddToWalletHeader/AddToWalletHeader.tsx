import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, TextInput, Portal, Modal} from 'react-native-paper';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner, TransactionCategory, AmountError} from '~components';

/* files and utils */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';
import {RootState} from '~redux/store';
import {ThemeContext} from '~context/ThemeCotext';
import {setCategory} from '~redux/AddExpenseReducer';

interface Props {
  closeScreen: () => void;
  walletID: string;
  refresh: () => void;
}

const AddToWalletHeader = ({closeScreen, walletID, refresh}: Props) => {
  const [xpense, setXpense] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const {theme} = useContext(ThemeContext);
  const [amountError, setAmountError] = useState(false);

  const dispatch = useDispatch();

  const {note, marchant, category, image} = useSelector(
    (state: RootState) => state.AddExpense,
  );

  const transaction = async () => {
    const newTransaction = {
      note,
      marchant,
      amount,
      type: xpense ? 'Expense' : 'Income',
      createdAt: new Date().toISOString(),
      category: category ? {category} : 'Others',
    };
    setLoading(true);
    const token = await AsyncStorage.getItem('AuthToken');
    axios.defaults.headers.common = {Authorization: `${token}`};
    axios
      .post(
        `https://us-central1-sapa-4bd2e.cloudfunctions.net/api/createtransaction/${walletID}`,
        newTransaction,
      )
      .then(response => {
        setLoading(false);
        refresh();
        closeScreen();
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  const saveTransaction = () => {
    if (amount) {
      transaction();
    } else {
      setAmountError(true);
    }
  };

  const closeModal = () => {
    setShowmodal(false);
  };

  const saveTitle = (title: string) => {
    setTitle(title);
  };

  const saveCategory = (cate: string) => {
    //dispatch category here
    dispatch(setCategory(cate));
  };

  const dismissError = () => {
    setAmountError(false);
  };

  /* const DismissKeyboard = ({children}: any) => {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    );
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
                  backgroundColor: xpense
                    ? colors.SEMI_TRANSPARENT
                    : 'transparent',
                },
              ]}>
              <Text style={[fonts.caption]}>Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.expense,
                {
                  backgroundColor: xpense
                    ? 'transparent'
                    : colors.SEMI_TRANSPARENT,
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
          <TextInput
            onChangeText={value => setAmount(value)}
            style={[styles.input, fonts.bodyText]}
            placeholder={xpense ? '-' + ' 0.00' : '+' + ' 0.00'}
            underlineColor={xpense ? colors.SECONDARY : colors.PRIMARY}
            autoFocus={true}
            maxLength={20}
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowmodal(true)}>
            <Icon
              name={title ? title : 'bullseye'}
              size={sizes.regularIconSize}
              color={colors.SECONDARY}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AddToWalletHeader;
