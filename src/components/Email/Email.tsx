import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as yup from 'yup';
import {Formik} from 'formik';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {colors, sizes} from '../../utils';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {setEmail} from '../../redux/userReducer';

type startedProps = {
  onButtonPress(): any;
  onBackPress(): any;
};

const vaidation = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a valid email')
    .required('Email Address is Required'),
});

const StartedCurrency = (props: startedProps) => {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={[styles.captionContainer]}>
        <Text style={[styles.caption, sizes.fonts.bodyText]}>
          Enter displayed email address on your expense report.
        </Text>

        <Formik
          validationSchema={vaidation}
          initialValues={{email: ''}}
          onSubmit={values => {
            dispatch(setEmail(values.email));
            props.onButtonPress();
          }}>
          {({handleChange, handleBlur, handleSubmit, errors}) => (
            <>
              <TextInput
                style={styles.name}
                label="Email address"
                onChangeText={handleChange('email')}
                right={<AntDesign name="home" />}
                keyboardType="email-address"
                returnKeyType="go"
                returnKeyLabel="go"
                clearButtonMode="while-editing"
                onSubmitEditing={handleSubmit}
              />
              {errors.email && (
                <HelperText
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  {errors.email}
                </HelperText>
              )}

              <View style={styles.buttonContainer}>
                <LargeButton title="Done" onPress={handleSubmit} />
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
    </View>
  );
};

export default StartedCurrency;
