import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: hp(20),
  },
  headRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(5),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    height: hp(4),
    borderRadius: wp(5),
    width: wp(45),
    justifyContent: 'space-evenly',
  },
  expense: {
    borderRadius: wp(3),
    width: wp(21),
    height: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'transparent',
    height: hp(5),
    fontWeight: 'bold',
  },

  modal: {
    height: hp(50),
    width: wp(95),
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    top: hp(20),
    borderRadius: wp(5),
  },
});

export default styles;
