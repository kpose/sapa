import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as yup from 'yup';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import NetworkError from '../NetworkError/NetworkError';
import {colors, sizes} from '~utils';
import Spinner from '../Spinner/Spinner';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {useAppSelector, useAppDispatch} from '~redux/reduxhooks';
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

const Email = ({onButtonPress, onBackPress}: Props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [offlinestatus, setOfflineStatus] = useState(false);
  const dispatch = useAppDispatch();
  const [servererror, setServerError] = useState<string>();
  const {username, firstname, email, symbol, currency} = useAppSelector(
    state => state.user,
  );

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateMounting();
  }, []);

  const animateMounting = () => {
    Animated.timing(animation, {
      toValue: 5,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = (values: {email: string; password: string}) => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        const userCredentials = {
          firstName: firstname,
          username: username,
          email: values.email,
          createdAt: new Date().toISOString(),
        };
        return firestore()
          .collection('users')
          .doc(`${userCredentials.email}`)
          .set(userCredentials);
      })
      .then(() => {
        setLoading(false);
        dispatch(setEmail(values.email));
        navigation.navigate('Home');
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          setServerError('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          setServerError('That email address is invalid!');
        }
      });
  };

  return (
    <Animated.View style={[styles.container, {opacity: animation}]}>
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

            {servererror && (
              <HelperText
                type="error"
                visible={true}
                style={[sizes.fonts.caption, styles.name]}>
                {servererror}
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
    </Animated.View>
  );
};

export default Email;
