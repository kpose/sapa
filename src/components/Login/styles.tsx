import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  captionContainer: {
    marginTop: hp(39),
    marginLeft: wp(10),
  },
  caption: {
    fontWeight: 'bold',
    alignItems: 'center',
  },

  name: {
    marginTop: hp(2),
    width: wp(85),
    backgroundColor: 'transparent',
  },

  buttonContainer: {
    marginTop: hp(18),
    marginLeft: wp(-10),
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
});

export default styles;
