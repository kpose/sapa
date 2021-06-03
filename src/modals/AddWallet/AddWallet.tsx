import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {colors, hp, wp} from '~utils';
import {LargeButton} from '~components';
import {fonts} from '~utils/fonts';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddWallet = () => {
  const [title, setTitle] = useState<string>('');
  const [bearertoken, setBearerToken] = useState<any>('');

  useEffect(() => {
    getToken();
  }, [bearertoken]);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('AuthToken');
    setBearerToken(token);
  };

  const saveWallet = () => {
    const userWallet = {
      title,
    };
    axios.defaults.headers.common = {Authorization: `${bearertoken}`};
    axios
      .post(
        'https://us-central1-sapa-4bd2e.cloudfunctions.net/api/createwallet',
        userWallet,
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
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
