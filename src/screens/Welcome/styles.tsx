import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
import {heightPercentageToDP} from '../../utils/responsive';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
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
  icon: {
    color: 'white',
  },
  wave: {
    color: colors.PRIMARY,
  },
});

export default styles;
