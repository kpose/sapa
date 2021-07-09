import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },

  captionContainer: {
    marginTop: hp(40),
    alignItems: 'center',
  },
  caption: {
    fontWeight: 'bold',
    alignItems: 'center',
  },

  name: {
    marginTop: hp(2),
    width: wp(85),
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  buttonContainer: {
    //position: 'absolute',
    //bottom: hp(8),
    //right: 0,
    //left: 0,
    marginTop: hp(20),
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
});

export default styles;
