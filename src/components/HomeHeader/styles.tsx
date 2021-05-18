import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    //backgroundColor: 'transparent',
    marginLeft: wp(5),
    marginRight: wp(5),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  surface: {
    backgroundColor: 'transparent',
    borderWidth: wp(0.3),
    height: hp(8),
    marginTop: hp(1),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
  },
  price: {
    marginTop: hp(0.7),
  },
});

export default styles;
