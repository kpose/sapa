import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {colors, hp, wp} from '~utils';
import {LargeButton} from '~components';
import {fonts} from '~utils/fonts';

const AddWallet = () => {
  const [title, setTitle] = useState<string>('');
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
        onPress={() => console.log('press')}
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
