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
    alignItems: 'center',
  },
  caption: {
    alignSelf: 'center',
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },

  iconContainer: {
    position: 'absolute',
    bottom: hp(2),
    alignSelf: 'center',
  },

  wave: {
    color: colors.PRIMARY,
  },
});

export default styles;
