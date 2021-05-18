import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(1),
  },
  surface: {
    height: hp(15),
    borderRadius: wp(2),
  },
  footer: {
    flexDirection: 'row',
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  myWallet: {
    marginTop: hp(1),
    marginLeft: wp(3),
  },
  wallet: {
    fontWeight: 'bold',
    marginBottom: hp(0.5),
  },
  days: {
    marginRight: wp(20),
  },
  button: {
    position: 'absolute',
    backgroundColor: colors.SECONDARY,
    right: wp(5),
    top: hp(5),
    borderRadius: 100,
  },
});

export default styles;
