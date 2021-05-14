import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    position: 'absolute',
    //backgroundColor: colors.WHITE,
    top: hp(25),
    width: wp(90),
    height: hp(50),
    alignSelf: 'center',
    borderRadius: 10,
    flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  cancelIcon: {
    margin: wp(2),
    color: colors.PRIMARY,
  },
  picker: {
    flexDirection: 'row',
    marginLeft: wp(2),
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divide: {
    marginLeft: wp(2),
    height: hp(0.1),
    backgroundColor: colors.DARK_GRAY,
    width: wp(83),
    marginTop: hp(1),
  },
  name: {
    //marginRight: wp(8),
    //color: colors.DARK_GRAY,
  },
  searchContainer: {
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
  search: {
    width: wp(77),
    height: hp(4),
  },
  indicator: {
    alignSelf: 'center',
    marginTop: hp(25),
    marginLeft: wp(100),
  },
});

export default styles;
