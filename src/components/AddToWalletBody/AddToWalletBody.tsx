import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Text, TextInput, Surface, Portal, Modal} from 'react-native-paper';

/* styles and utils */
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors, hp, sizes, wp} from '~utils';
import {CameraModal} from '~modals';
import {fonts} from '~utils/fonts';
import {setMarchant, setNote} from '~redux/expenseSlice';
import {useAppDispatch} from '~redux/reduxhooks';

interface Props {
  title: string;
}

interface PhotoProps {
  title: string;
  mediaType: string;
  maxWidth: number;
  maxHeight: number;
  noData: boolean;
  storageOptions: {skipBackup: boolean};
}

const AddToWalletBody = ({title}: Props) => {
  const elsaped = Date.now();
  const today = new Date(elsaped).toDateString();
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [imageSource, setImageSource] = useState(null);
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
      let source = {uri: response.uri};
      setImageSource(source.uri);
    });
  }

  function selectCamera() {
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
      console.log({response});

      let source = {uri: response.uri};
      setImageSource(source.uri);
    });
  }

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalStyle}>
          <CameraModal photoPress={selectPhoto} cameraPress={selectCamera} />
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
            <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}> {today}</Text>
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
            <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}>Wallet</Text>
            <Text style={[fonts.caption, styles.wallet]}>{title}</Text>
          </View>

          <TouchableOpacity onPress={showModal}>
            <Surface style={styles.cameraContainer}>
              <Icon
                name="camera"
                color={colors.LIGHT_GRAY}
                size={sizes.navigationIconSize}
              />
            </Surface>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default AddToWalletBody;
