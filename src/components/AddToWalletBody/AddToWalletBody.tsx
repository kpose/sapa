import React, {useState} from 'react';
import {
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {Text, TextInput, Surface, Portal, Modal} from 'react-native-paper';

/* styles and utils */
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';
import {colors, hp, sizes, wp} from '~utils';
import {CameraModal, DatePickerModal} from '~modals';
import {fonts} from '~utils/fonts';
import {setImage, setMarchant, setNote, setDate} from '~redux/expenseSlice';
import {useAppDispatch} from '~redux/reduxhooks';

interface Props {
  title: string;
}

interface PhotoProps {
  title: string;
  mediaType: any;
  maxWidth: number;
  maxHeight: number;
  noData: boolean;
  storageOptions: {skipBackup: boolean};
}

const AddToWalletBody = ({title}: Props) => {
  const elsaped = Date.now();
  const today = new Date(elsaped).toDateString();

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [imageSource, setImageSource] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timestamp, setTimestamp] = useState(
    moment(elsaped).format('MMM D, YYYY'),
  );

  const dispatch = useAppDispatch();

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
        setVisible(false);
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        setVisible(false);
        let source: any = response.assets[0].uri;
        setImageSource(source);
        dispatch(setImage(source));
      }
    });
  }

  const confirmDate = (selectedDate: string) => {
    //setTimestamp(moment(selectedDate, 'YYYY, MM, DD').format('MMM D, YYYY'));
    setTimestamp(moment(selectedDate).format('MMM D, YYYY'));
    dispatch(setDate(moment(selectedDate).format()));
    setShowDatePicker(false);
  };

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
      if (response.didCancel) {
        setVisible(false);
      } else if (response.errorMessage) {
        console.log(response.errorMessage);
      } else {
        let source: any = response.assets[0].uri;
        setVisible(false);
        setImageSource(source);
        dispatch(setImage(source));
      }
    });
  } */

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalStyle}>
          <CameraModal
            photoPress={selectPhoto}
            cameraPress={() => console.log('camera not fixed')}
          />
        </Modal>
      </Portal>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="padding"
        /* keyboardVerticalOffset={hp(20)} */
      >
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
              <Text style={[fonts.body, {marginLeft: wp(4)}]}>{timestamp}</Text>
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
              placeholder="Merchant"
              underlineColor="transparent"
              style={[styles.input, fonts.body]}
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
              placeholder="Note"
              underlineColor="transparent"
              style={[styles.input, fonts.body]}
            />
          </View>

          <View style={styles.itemContainer}>
            <Icon
              name="wallet"
              color={colors.LIGHT_GRAY}
              size={sizes.navigationIconSize}
            />
            <Text style={[fonts.body, {marginLeft: wp(4)}]}>Wallet</Text>
            <Text style={[fonts.body, styles.wallet]}>{title}</Text>
          </View>

          <Pressable onPress={showModal}>
            <Surface style={styles.cameraContainer}>
              {imageSource ? (
                <Image
                  source={{uri: imageSource}}
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
        </ScrollView>
        <DatePickerModal
          visible={showDatePicker}
          onDismiss={() => setShowDatePicker(false)}
          date={today}
          onConfirm={(x: string) => confirmDate(x)}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default AddToWalletBody;
