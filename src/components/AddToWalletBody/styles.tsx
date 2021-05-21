import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: wp(3),
    marginRight: wp(3),
    marginTop: hp(2),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
});

export default styles;
