import React, {useState, useContext} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, TextInput, Portal, Modal} from 'react-native-paper';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner, TransactionCategory, AmountError} from '~components';

/* files and utils */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';
import {ThemeContext} from '~context/ThemeCotext';
import {setCategory} from '~redux/expenseSlice';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

interface Props {
  closeScreen: () => void;
  walletID: string;
  //refresh?: () => void;
}

const AddToWalletHeader = ({closeScreen, walletID}: Props) => {
  const [xpense, setXpense] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number>();
  const {theme} = useContext(ThemeContext);
  const [amountError, setAmountError] = useState(false);
  const dispatch = useAppDispatch();
  const [uploading, setUploading] = useState(false);

  const {note, marchant, category, image} = useAppSelector(
    state => state.expense,
  );

  const expenditure = '-' + amount;
  const income = '+' + amount;

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
    if (amount && amount > 0) {
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

  return (
    <>
      {loading && <Spinner />}
      {uploading && <Spinner />}
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
            //placeholder={xpense ? '- 0.00' : '+ 0.00'}
            //defaultValue={xpense ? '- ' : '+ '}
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
