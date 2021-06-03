import React, {useState} from 'react';
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import * as yup from 'yup';
import axios from 'axios';
import {Formik} from 'formik';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import Spinner from '../Spinner/Spinner';
import {sizes} from '~utils';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type Props = {
  //onButtonPress?: () => void;
  onBackPress?: () => void;
};

const vaidation = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a valid email')
    .required('Your Email is Required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is Required'),
});

const Login = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [servererror, setServerError] = useState();
  const navigation = useNavigation();

  const handlePress = (values: {}) => {
    setLoading(true);
    axios
      .post(
        'https://us-central1-sapa-4bd2e.cloudfunctions.net/api/login',
        values,
      )
      .then(response => {
        AsyncStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
        navigation.navigate('Home');
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setServerError(err.response.data);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      {loading && <Spinner />}
      <View style={[styles.captionContainer]}>
        <Formik
          validationSchema={vaidation}
          initialValues={{email: '', password: ''}}
          onSubmit={values => handlePress(values)}>
          {({handleChange, handleBlur, handleSubmit, errors}) => (
            <>
              <TextInput
                testID="emailID"
                style={styles.name}
                label="Email"
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                clearButtonMode="while-editing"
                error={errors.email ? true : false}
              />
              {errors.email && (
                <HelperText
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  {errors.email}
                </HelperText>
              )}

              <TextInput
                testID="passwordID"
                style={styles.name}
                label="Password"
                onChangeText={handleChange('password')}
                secureTextEntry={true}
                clearButtonMode="while-editing"
                onSubmitEditing={handleSubmit}
                error={errors.password ? true : false}
              />
              {errors.password && (
                <HelperText
                  testID="passwordErrorID"
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  {errors.password}
                </HelperText>
              )}

              {servererror && (
                <HelperText
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  Wrong credential combination, try again!
                </HelperText>
              )}

              <View style={styles.buttonContainer}>
                <LargeButton
                  title="Log In"
                  onPress={handleSubmit}
                  testID="buttonID"
                />
              </View>
            </>
          )}
        </Formik>
      </View>

      <TouchableOpacity
        style={styles.loginContainer}
        onPress={props.onBackPress}>
        <Text style={[sizes.fonts.caption, styles.idtext]}>Get Started</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
