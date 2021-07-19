import React, {useState} from 'react';
import {
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {Text, TextInput, Surface, Portal, Modal} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

/* styles and utils */
import styles from './styles';
import moment from 'moment';
import {CameraModal, DatePickerModal, DeleteTransactionModal} from '~modals';
import {fonts} from '~utils/fonts';
import {colors, hp, sizes, wp} from '~utils';
import {Spinner} from '~components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {setDate, setImage, setMarchant, setNote} from '~redux/expenseSlice';
import {useAppDispatch, useAppSelector} from '~redux/reduxhooks';

interface Props {
  date: string;
  marchant: string;
  note: string;
  image: string;
  transactionItem: {};
  closeScreen: () => void;
}

interface PhotoProps {
  title: string;
  mediaType: any;
  maxWidth: number;
  maxHeight: number;
  noData: boolean;
  storageOptions: {skipBackup: boolean};
}

const EditWalletBody = ({
  date,
  marchant,
  note,
  image,
  transactionItem,
  closeScreen,
}: Props) => {
  const [cameraVisible, setCameraVisible] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const showModal = () => setCameraVisible(true);
  const hideModal = () => setCameraVisible(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(image);
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.wallet);
  const [timestamp, setTimestamp] = useState(
    moment(date).format('MMM Do, YYYY'),
  );

  const walletTitle = data.title;
  const walletID = data.walletId;

  const deleteTransaction = async () => {
    setIsDeleteModal(false);
    setLoading(true);
    await firestore()
      .collection('wallets')
      .doc(`${walletID}`)
      .update({
        transactions: firestore.FieldValue.arrayRemove(transactionItem),
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

  function selectPhoto() {
    let options: PhotoProps = {
      title: 'You can choose one image',
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setCameraVisible(false);
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        let source: any = response.assets[0].uri;
        setCameraVisible(false);
        setImageUri(source);
        dispatch(setImage(source));
      }
    });
  }

  const confirmDate = (selectedDate: string) => {
    setTimestamp(moment(selectedDate).format('MMM Do YYYY'));
    dispatch(setDate(moment(selectedDate).format('MMM Do YYYY')));
    setShowDatePicker(false);
  };

  return (
    <>
      <Portal>
        <Modal
          visible={cameraVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalStyle}>
          <CameraModal
            photoPress={selectPhoto}
            cameraPress={() => console.log('camera not fixed')}
          />
        </Modal>
      </Portal>
      <DeleteTransactionModal
        visible={isDeleteModal}
        onDismiss={() => setIsDeleteModal(false)}
        onCancel={() => setIsDeleteModal(false)}
        onDelete={deleteTransaction}
      />
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        {loading && <Spinner />}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.itemContainer}>
            <Icon
              name="calendar-month"
              color={colors.LIGHT_GRAY}
              size={sizes.navigationIconSize}
            />
            <Pressable onPress={() => setShowDatePicker(true)}>
              <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}>
                {timestamp}
              </Text>
            </Pressable>
          </View>

          <View style={styles.itemContainer}>
            <Icon
              name="briefcase-variant"
              color={colors.LIGHT_GRAY}
              size={sizes.navigationIconSize}
            />

            <TextInput
              onChangeText={(text: string) => dispatch(setMarchant(text))}
              defaultValue={marchant}
              placeholder="Merchant"
              underlineColor="transparent"
              style={styles.input}
            />
          </View>

          <View style={styles.itemContainer}>
            <Icon
              name="border-color"
              color={colors.LIGHT_GRAY}
              size={sizes.navigationIconSize}
            />
            <TextInput
              //value={note}
              onChangeText={(text: string) => dispatch(setNote(text))}
              defaultValue={note}
              placeholder="Note"
              underlineColor="transparent"
              style={styles.input}
            />
          </View>

          <View style={styles.itemContainer}>
            <Icon
              name="wallet"
              color={colors.LIGHT_GRAY}
              size={sizes.navigationIconSize}
            />
            <Text style={[fonts.bodyText, {marginLeft: wp(7)}]}>
              {walletTitle}
            </Text>
          </View>

          <Pressable onPress={showModal}>
            <Surface style={styles.cameraContainer}>
              {imageUri ? (
                <Image
                  source={{uri: imageUri}}
                  resizeMode={'cover'}
                  style={{width: '100%', height: '100%', borderRadius: wp(5)}}
                />
              ) : (
                <Icon
                  name="camera"
                  color={colors.LIGHT_GRAY}
                  size={sizes.navigationIconSize}
                />
              )}
            </Surface>
          </Pressable>

          <Pressable
            style={styles.deleteContainer}
            onPress={() => setIsDeleteModal(true)}>
            <Text style={[fonts.caption, styles.delete]}>
              Delete this transaction
            </Text>
          </Pressable>
        </ScrollView>

        <DatePickerModal
          visible={showDatePicker}
          onDismiss={() => setShowDatePicker(false)}
          date={date}
          onConfirm={(x: string) => confirmDate(x)}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default EditWalletBody;

/* function selectCamera() {
    let options: PhotoProps = {
      title: 'You can choose one image',
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchCamera(options, response => {
      let source: any = {uri: response.uri};
      setVisible(false);
      setImageSource(source);
      dispatch(setImage(source));
    });
  } */
