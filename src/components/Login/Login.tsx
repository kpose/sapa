import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Text, TextInput, HelperText} from 'react-native-paper';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import Spinner from '../Spinner/Spinner';
import {colors, sizes} from '~utils';
import NetworkError from '../NetworkError/NetworkError';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {useAppDispatch} from '~redux/reduxhooks';
import {setEmail} from '~redux/userSlice';

type Props = {
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
  const [servererror, setServerError] = useState<string>();
  const [offlinestatus, setOfflineStatus] = useState(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
      setLoading(false);
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
    Keyboard.dismiss();
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(data => {
        setLoading(false);
        dispatch(setEmail(values.email));
        navigation.navigate('Home');
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          setLoading(false);
          setServerError('This account does not exist !!');
        }
        if (err.code === 'auth/wrong-password') {
          setLoading(false);
          setServerError('Wrong password, try again ');
        }
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View style={[styles.container, {opacity: animation}]}>
          {offlinestatus && <NetworkError />}
          {loading && <Spinner />}
          <View style={styles.captionContainer}></View>

          <Formik
            validationSchema={vaidation}
            initialValues={{email: '', password: ''}}
            onSubmit={values => handlePress(values)}>
            {({handleChange, handleBlur, handleSubmit, errors}) => (
              <>
                <TextInput
                  testID="emailID"
                  style={styles.name}
                  //label="Email"
                  placeholder={errors.email ? errors.email : 'Enter your email'}
                  placeholderTextColor={
                    errors.email ? colors.WARNING : colors.LIGHT_GRAY
                  }
                  onChangeText={handleChange('email')}
                  keyboardType="email-address"
                  clearButtonMode="while-editing"
                  error={errors.email ? true : false}
                />
                {/* {errors.email && (
                  <HelperText
                    type="error"
                    visible={true}
                    style={[sizes.fonts.caption, styles.name]}>
                    {errors.email}
                  </HelperText>
                )}
 */}
                <TextInput
                  testID="passwordID"
                  style={styles.name}
                  //label="Password"
                  placeholder={
                    errors.password ? errors.password : 'Enter your password'
                  }
                  placeholderTextColor={
                    errors.password ? colors.WARNING : colors.LIGHT_GRAY
                  }
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  clearButtonMode="while-editing"
                  onSubmitEditing={handleSubmit}
                  error={errors.password ? true : false}
                />
                {/* {errors.password && (
                  <HelperText
                    testID="passwordErrorID"
                    type="error"
                    visible={true}
                    style={[sizes.fonts.caption, styles.name]}>
                    {errors.password}
                  </HelperText>
                )} */}

                {servererror && (
                  <HelperText
                    type="error"
                    visible={true}
                    style={[sizes.fonts.caption, styles.name]}>
                    {servererror}
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
        </Animated.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
