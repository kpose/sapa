import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import * as yup from 'yup';
import {Formik} from 'formik';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {sizes} from '../../utils';
import {useDispatch} from 'react-redux';
import {setFirstName, setLastName} from '../../redux/userReducer';
import styles from './styles';

type Props = {
  onButtonPress(): any;
  onBackPress?(): any;
};
const vaidation = yup.object().shape({
  firstname: yup
    .string()
    .min(2, ({min}) => `Name should be at least ${2} characters`)
    .required('Provide your first name'),
});

const FirstName = (props: Props) => {
  const dispatch = useDispatch();

  /* const handlePress = () => {
    dispatch(setFirstName(first));
    props.onButtonPress();
  }; */

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={[styles.captionContainer]}>
        <Text style={[sizes.fonts.bodyText, styles.caption]}>
          What should i call you?
        </Text>

        <Formik
          validationSchema={vaidation}
          initialValues={{firstname: '', lastname: ''}}
          onSubmit={values => {
            dispatch(setFirstName(values.firstname));
            dispatch(setLastName(values.lastname));
            props.onButtonPress();
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <TextInput
                style={styles.name}
                label="First Name"
                onChangeText={handleChange('firstname')}
                autoCompleteType="off"
                autoCorrect={false}
                clearButtonMode="while-editing"
                //onSubmitEditing={handlePress}
                value={values.firstname}
              />
              {errors.firstname && (
                <HelperText
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  {errors.firstname}
                </HelperText>
              )}

              <TextInput
                style={styles.name}
                label="Last Name (Optional)"
                onChangeText={handleChange('lastname')}
                autoCompleteType="off"
                autoCorrect={false}
                value={values.lastname}
              />

              <View style={styles.buttonContainer}>
                <LargeButton title="Next" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>

      <TouchableOpacity
        style={styles.loginContainer}
        onPress={props.onBackPress}>
        <Text style={[sizes.fonts.caption, styles.idtext]}>Go Back</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default FirstName;
