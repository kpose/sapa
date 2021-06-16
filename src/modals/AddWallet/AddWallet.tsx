import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {colors, hp, wp} from '~utils';
import {LargeButton} from '~components';
import {fonts} from '~utils/fonts';
import firestore from '@react-native-firebase/firestore';

interface Props {
  close: () => void;
  email: string;
  getWallets?: () => void;
}

const AddWallet = ({close, getWallets, email}: Props) => {
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const saveWallet = async () => {
    setLoading(true);
    const newWallet = {
      title,
      createdAt: new Date().toISOString(),
      email,
      transactions: [],
    };
    firestore()
      .collection('wallets')
      .add(newWallet)
      .then(doc => {
        setLoading(false);
        close();
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <View>
      <Text style={[fonts.modalTitle, styles.add]}>Add Wallet</Text>
      <TextInput
        placeholder="What do we call this wallet?"
        onChangeText={(text: string) => setTitle(text)}
        autoFocus={true}
        style={[styles.input, fonts.textInput]}
      />
      <LargeButton
        testID="buttontestID"
        disabled={title ? false : true}
        onPress={saveWallet}
        title="Save"
        loading={loading ? true : false}
      />
    </View>
  );
};

export default AddWallet;

const styles = StyleSheet.create({
  container: {},
  input: {
    borderWidth: 0,
    width: wp(80),
    alignSelf: 'center',
    marginBottom: hp(3),
    height: hp(10),
    backgroundColor: 'transparent',
  },
  add: {
    margin: hp(2),
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
});
