import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Portal, Modal} from 'react-native-paper';
import {colors, hp, wp} from '~utils';
import {fonts} from '~utils/fonts';

interface Props {
  visible: boolean;
  dismiss: () => void;
}

const AmountErrror = ({visible, dismiss}: Props) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={dismiss}
        contentContainerStyle={styles.container}>
        <Text style={[styles.text, fonts.caption]}>
          Enter a valid amount !!
        </Text>
      </Modal>
    </Portal>
  );
};

export default AmountErrror;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: colors.WARNING,
    height: hp(6),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
});
