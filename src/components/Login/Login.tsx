import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import * as yup from 'yup';
import axios from 'axios';
import {Formik} from 'formik';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import Spinner from '../Spinner/Spinner';
import {sizes} from '~utils';
import NetworkError from '../NetworkError/NetworkError';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

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
  const [offlinestatus, setOfflineStatus] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, [offlinestatus]);

  const handlePress = (values: {}) => {
    setLoading(true);
    axios
      .post(
        'https://us-central1-sapa-4bd2e.cloudfunctions.net/api/login',
        values,
      )
      .then(response => {
        AsyncStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
        setLoading(false);
        navigation.navigate('Home');
      })
      .catch(err => {
        setServerError(err.response.data);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {offlinestatus && <NetworkError />}
      {loading && <Spinner />}
      <View style={styles.captionContainer}>
        {/* <Text style={[sizes.fonts.bodyText, styles.caption]}>
          What should i call you?
        </Text> */}
      </View>

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
                style={[sizes.fonts.caption, styles.name]}>
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
                style={[sizes.fonts.caption, styles.name]}>
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
                disabled={offlinestatus}
                testID="buttonID"
              />

              <TouchableOpacity
                style={styles.loginContainer}
                onPress={props.onBackPress}>
                <Text style={[sizes.fonts.caption, styles.idtext]}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
