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
import {sizes} from '~utils';
import {useDispatch} from 'react-redux';
import {setFirstName, setUsername} from '~redux/userReducer';
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
          initialValues={{firstname: '', username: ''}}
          onSubmit={values => {
            dispatch(setUsername(values.username));
            dispatch(setFirstName(values.firstname));
            props.onButtonPress();
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <>
              <TextInput
                style={styles.name}
                label="Username"
                onChangeText={handleChange('username')}
                autoCompleteType="off"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                //onSubmitEditing={handlePress}
                value={values.username}
              />
              {errors.username && (
                <HelperText
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  {errors.username}
                </HelperText>
              )}

              <TextInput
                style={styles.name}
                label="First Name (Optional)"
                onChangeText={handleChange('firstname')}
                autoCompleteType="off"
                autoCorrect={false}
                onSubmitEditing={handleSubmit}
                value={values.firstname}
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
