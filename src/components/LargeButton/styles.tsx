import {StyleSheet, Dimensions} from 'react-native';

import {colors, wp, hp} from '../../utils';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    justifyContent: 'center',
    width: wp(80),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: 15,
  },
});

export default styles;
