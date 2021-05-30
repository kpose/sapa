import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
import {heightPercentageToDP} from '../../utils/responsive';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  captionContainer: {
    marginTop: heightPercentageToDP(25),
    marginLeft: wp(10),
  },

  name: {
    marginTop: hp(2),
    width: wp(85),
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },

  caption: {
    fontWeight: 'bold',
    alignItems: 'center',
  },

  idtext: {
    marginRight: wp(2),
  },

  buttonContainer: {
    marginTop: heightPercentageToDP(25),
    marginLeft: wp(-10),
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5),
  },
});

export default styles;
