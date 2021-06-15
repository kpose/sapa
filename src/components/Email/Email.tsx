import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as yup from 'yup';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import NetworkError from '../NetworkError/NetworkError';
import {colors, sizes} from '~utils';
import Spinner from '../Spinner/Spinner';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
import {string} from 'yup/lib/locale';
import {setEmail} from '~redux/userSlice';

type Props = {
  onButtonPress?: () => void;
  onBackPress: () => void;
};

const vaidation = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({min}: any) => `Password must be at least ${min} characters`)
    .required('Password is Required'),
});

interface ServerError {
  email: string;
  username: string;
}

const Email = ({onButtonPress, onBackPress}: Props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [offlinestatus, setOfflineStatus] = useState(false);
  const [servererror, setServerError] = useState<ServerError>({
    email: '',
    username: '',
  });
  const {username, firstname, email, symbol} = useAppSelector(
    state => state.user,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, [offlinestatus]);

  const handlePress = (values: {email: string; password: string}) => {
    dispatch(setEmail(values.email));
    const userData = {
      firstName: firstname,
      username: username,
      email: values.email,
      password: values.password,
    };
    setLoading(true);
    axios
      .post(
        'https://us-central1-sapa-4bd2e.cloudfunctions.net/api/signup',
        userData,
      )
      .then((response: any) => {
        AsyncStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
        navigation.navigate('Home');
        //onButtonPress();
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        setServerError(err.response.data);
      });
  };

  return (
    <View style={styles.container}>
      {offlinestatus && <NetworkError />}
      {loading && <Spinner />}
      <View style={styles.captionContainer}>
        <Text style={[styles.caption, sizes.fonts.bodyText]}>
          Enter displayed email address on your expense report.
        </Text>
      </View>

      <Formik
        validationSchema={vaidation}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handlePress(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <TextInput
              defaultValue={email}
              style={styles.name}
              label="Email address"
              onChangeText={handleChange('email')}
              right={<AntDesign name="home" />}
              keyboardType="email-address"
              returnKeyType="go"
              returnKeyLabel="go"
              clearButtonMode="while-editing"
              onSubmitEditing={handleSubmit}
              testID="emailID"
            />
            {errors.email && (
              <HelperText
                testID="emailErrorID"
                type="error"
                visible={true}
                style={[sizes.fonts.caption, styles.name]}>
                {errors.email}
              </HelperText>
            )}

            <TextInput
              style={styles.name}
              label="Password"
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              clearButtonMode="while-editing"
              onSubmitEditing={handleSubmit}
              error={errors.password ? true : false}
              testID="passwordID"
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
                {servererror.email || servererror.username}
              </HelperText>
            )}

            <View style={styles.buttonContainer}>
              <LargeButton
                title="Done"
                onPress={handleSubmit}
                disabled={offlinestatus}
              />

              <TouchableOpacity
                style={styles.loginContainer}
                onPress={onBackPress}>
                <Text style={[sizes.fonts.caption, styles.idtext]}>
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Email;
