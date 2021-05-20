import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyImage: {
    height: hp(30),
    width: wp(40),
    borderRadius: 10,
  },
  empty: {
    fontWeight: 'bold',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
});

export default styles;
