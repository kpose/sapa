import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '~utils';

const styles = StyleSheet.create({
  container: {
    height: hp(20),
    width: wp(60),
    borderRadius: wp(5)
  },
  modalcontainer: {
    //justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainer: {
    marginTop: hp(2),
    marginLeft: wp(3),
    marginBottom: hp(3)
  },
  incomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(3),
    marginRight: wp(3)
  }, 
  income: {
    fontWeight: 'bold'
  }, 
  divide: {
    marginTop: hp(1)
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     marginLeft: wp(3),
    marginRight: wp(3),
    marginTop: hp(1)
  },
  close: {
    fontWeight: 'bold',
    color: colors.SECONDARY
  }
});

export default styles;
