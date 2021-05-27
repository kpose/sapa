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
import {setFirstName} from '~redux/userReducer';
import styles from './styles';

type Props = {
  onButtonPress?(): any;
  onBackPress?(): any;
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
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setFirstName(email));
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={[styles.captionContainer]}>
        <Formik
          validationSchema={vaidation}
          initialValues={{email: '', password: ''}}
          onSubmit={handlePress}>
          {({handleChange, handleBlur, handleSubmit, errors}) => (
            <>
              <TextInput
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
                  type="error"
                  visible={true}
                  style={[sizes.fonts.caption]}>
                  {errors.password}
                </HelperText>
              )}

              <View style={styles.buttonContainer}>
                <LargeButton title="Log In" onPress={handleSubmit} />
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
