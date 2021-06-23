import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    height: hp(30),
    width: wp(50),
  },
  modalcontainer: {
    //justifyContent: 'center',
    alignItems: 'center',
  },
  calender: {
    borderColor: colors.PRIMARY,
    height: hp(66),
  },
});

export default styles;
