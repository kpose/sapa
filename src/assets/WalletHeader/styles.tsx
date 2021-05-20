import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: hp(25),
    backgroundColor: colors.PRIMARY,

    /* borderBottomLeftRadius: 500,
    borderBottomRightRadius: 200, */

    //borderBottomStartRadius: 200,
    // borderBottomEndRadius: 200,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  surface: {
    //backgroundColor: 'transparent',
    /*  borderWidth: wp(0.3),
    height: hp(8),
    marginTop: hp(1),
    marginLeft: wp(5),
    marginRight: wp(5),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', */

    height: hp(14),
    borderRadius: wp(2),
    marginTop: hp(1),
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  title: {
    alignItems: 'center',
  },
  price: {
    marginTop: hp(0.7),
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
  footer: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginLeft: wp(3),
  },
});

export default styles;
