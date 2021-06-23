import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {Text, TextInput, Surface, Portal, Modal} from 'react-native-paper';

/* styles and utils */
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors, hp, sizes, wp} from '~utils';
import {CameraModal} from '~modals';
import {fonts} from '~utils/fonts';
import {setImage, setMarchant, setNote} from '~redux/expenseSlice';
import {useAppDispatch, useAppSelector} from '~redux/reduxhooks';

interface Props {
  date: string;
  marchant: string;
  note: string;
  image: string;
}

interface PhotoProps {
  title: string;
  mediaType: string;
  maxWidth: number;
  maxHeight: number;
  noData: boolean;
  storageOptions: {skipBackup: boolean};
}

const EditWalletBody = ({date, marchant, note, image}: Props) => {
  const elsaped = Date.now();
  const today = new Date(elsaped).toDateString();
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [imageSource, setImageSource] = useState('');
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.wallet);

  const wallet = data.title;
  const timestamp = moment(date).format('MMM Do YYYY');

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
      let source: any = response.assets[0].uri;
      setVisible(false);
      setImageSource(source);
      //dispatch(setImage(source));
    });
  }
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
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.itemContainer}>
            <Icon
              name="calendar-month"
              color={colors.LIGHT_GRAY}
              size={sizes.navigationIconSize}
            />
            <Text style={[fonts.bodyText, {marginLeft: wp(4)}]}>
              {timestamp}
            </Text>
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
            <Text style={[fonts.bodyText, {marginLeft: wp(7)}]}>{wallet}</Text>
          </View>

          <TouchableOpacity onPress={showModal}>
            <Surface style={styles.cameraContainer}>
              {image ? (
                <Image
                  source={{uri: image}}
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
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteContainer}>
            <Text style={[fonts.caption, styles.delete]}>
              Delete this transaction
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
