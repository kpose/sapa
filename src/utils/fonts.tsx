import {StyleSheet, Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const height = Dimensions.get('screen').height;

export const fonts = StyleSheet.create({
  title: {
    fontSize: RFValue(45, height),
    fontWeight: 'bold',
  },
  heading: {
    fontSize: RFValue(23, height),
    fontWeight: 'bold',
    letterSpacing: 0.41,
  },
  subheading: {
    fontSize: RFValue(23, height),
  },
  textInput: {
    fontSize: RFValue(23, height),
  },
  bodyText: {
    fontSize: RFValue(23, height),
    letterSpacing: -0.41,
  },
  secondaryText: {
    fontSize: RFValue(20, height),
    letterSpacing: -0.24,
  },
  modalAction: {
    fontWeight: '500',
    fontSize: RFValue(23, height),
  },
  modalRegular: {
    fontSize: RFValue(23, height),
  },
  modalTitle: {
    fontSize: RFValue(22, height),
    fontWeight: '500',
  },
  modalInput: {
    fontSize: RFValue(18, height),
  },
  modalItem: {
    fontSize: RFValue(23, height),
  },
  caption: {
    fontSize: RFValue(18, height),
    letterSpacing: -0.08,
  },
  smallerCaption: {
    fontSize: RFValue(13, height),
    letterSpacing: -0.08,
  },
  buttonText: {
    fontSize: RFValue(17, height),
    fontWeight: 'bold',
  },
  smallButtonText: {
    fontSize: RFValue(13, height),
  },
  listHeader: {
    fontSize: RFValue(17, height),
  },
});

export const navigationIconSize = RFValue(44, height);
export const regularIconSize = RFValue(20, height);
