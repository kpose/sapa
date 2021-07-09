import {StyleSheet, Dimensions} from 'react-native';
import {colors, hp, wp} from '../../utils';
import {heightPercentageToDP} from '../../utils/responsive';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },

  captionContainer: {
    marginTop: heightPercentageToDP(38),
    alignItems: 'center',
  },

  name: {
    marginTop: hp(2),
    width: wp(85),
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  caption: {
    fontWeight: 'bold',
    //alignItems: 'center',
    textAlign: 'center',
  },

  idtext: {
    marginRight: wp(2),
  },

  buttonContainer: {
    //marginTop: heightPercentageToDP(34),
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.5),
  },
});

export default styles;
