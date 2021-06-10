import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: wp(5),
    marginRight: wp(5),
  },

  modal: {
    height: hp(29),
    width: wp(90),
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    top: hp(7),
    borderRadius: wp(5),
  },
});

export default styles;
