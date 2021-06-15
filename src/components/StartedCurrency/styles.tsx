import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
import {heightPercentageToDP} from '../../utils/responsive';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  captionContainer: {
    marginTop: heightPercentageToDP(40),
    marginLeft: wp(10),
  },
  caption: {
    fontWeight: 'bold',
    alignItems: 'center',
  },

  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  currency: {
    marginLeft: wp(2),
  },

  buttonContainer: {
    //marginTop: heightPercentageToDP(34),
    position: 'absolute',
    bottom: hp(8),
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    flexDirection: 'row',
    marginTop: hp(1.5),
  },
  idtext: {
    marginRight: wp(2),
  },

  iconContainer: {
    position: 'absolute',
    bottom: hp(2),
    alignSelf: 'center',
  },
  divide: {
    height: hp(0.1),
    width: wp(83),
    marginTop: hp(1.5),
    backgroundColor: colors.WHITE,
  },
  rightIcon: {
    marginRight: wp(6),
    color: colors.WHITE,
  },
});

export default styles;
