import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
import {heightPercentageToDP} from '../../utils/responsive';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  captionContainer: {
    marginTop: heightPercentageToDP(39),
    marginLeft: wp(10),
  },
  caption: {
    fontWeight: 'bold',
  },

  currencyContainer: {
    flexDirection: 'row',
    marginTop: hp(3),
    alignItems: 'center',
  },
  currency: {
    marginLeft: wp(2),
  },

  buttonContainer: {
    marginTop: heightPercentageToDP(34),
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginLeft: wp(45),
    color: colors.WHITE,
  },
});

export default styles;
