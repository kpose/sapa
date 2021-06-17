import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: hp(15),
    width: wp(80),
    borderRadius: hp(5),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  card: {
    height: hp(10),
    width: wp(30),
    borderRadius: hp(2),
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: colors.SECONDARY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
