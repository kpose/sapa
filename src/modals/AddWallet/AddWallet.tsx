import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Surface} from 'react-native-paper';
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
  const newWallet = {
    title,
    createdAt: new Date().toISOString(),
    email,
    transactions: [],
  };

  const saveWallet = () => {
    setLoading(true);

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
    <Surface style={styles.container}>
      <Text style={[fonts.itemTitle, styles.add]}>Add Wallet</Text>
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
    </Surface>
  );
};

export default AddWallet;

const styles = StyleSheet.create({
  container: {
    height: hp(29),
    width: wp(90),
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    borderRadius: wp(5),
    elevation: hp(20),
  },
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
