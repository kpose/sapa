import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Text, TextInput, Surface} from 'react-native-paper';

/* styles and utils */
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, hp, sizes, wp} from '~utils';
import {fonts} from '~utils/fonts';

interface Props {
  title: string;
}

const AddToWalletBody = ({title}: Props) => {
  const elsaped = Date.now();
  const today = new Date(elsaped).toDateString();
  const [marchant, setMerchant] = useState('');
  const [note, setNote] = useState('');

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      /* keyboardVerticalOffset={hp(20)} */
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
            value={marchant}
            onChangeText={(text: string) => setMerchant(text)}
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
            value={note}
            onChangeText={(text: string) => setNote(text)}
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

        <TouchableOpacity onPress={() => console.log('camera')}>
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
  );
};

export default AddToWalletBody;
