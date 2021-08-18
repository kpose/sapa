import {StyleSheet} from 'react-native';
import {hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    width: wp(22),
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
    marginRight: wp(2),
    marginTop: hp(1),
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
});

export default styles;
