import React, {useEffect, useRef} from 'react';
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
import {Formik} from 'formik';

//UTILS AND FILES
import LargeButton from '../LargeButton/LargeButton';
import {colors, sizes} from '~utils';
import {useAppDispatch, useAppSelector} from '~redux/reduxhooks';
import {setFirstName, setUsername} from '~redux/userSlice';
import styles from './styles';

type Props = {
  onButtonPress: () => void;
  onBackPress?: () => void;
};
const vaidation = yup.object().shape({
  username: yup
    .string()
    .min(2, ({min}) => `Username should be at least ${2} characters.`)
    .required('Provide your username !!'),
});

const FirstName = (props: Props) => {
  const dispatch = useAppDispatch();
  const {firstname, username} = useAppSelector(state => state.user);
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

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View style={[styles.container, {opacity: animation}]}>
          <View style={styles.captionContainer}>
            <Text style={[sizes.fonts.itemTitle, styles.caption]}>
              What should i call you?
            </Text>
          </View>

          <Formik
            validationSchema={vaidation}
            initialValues={{firstname: firstname, username: username}}
            onSubmit={values => {
              dispatch(setUsername(values.username));
              dispatch(setFirstName(values.firstname));
              props.onButtonPress();
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <>
                <TextInput
                  testID="usernameID"
                  defaultValue={username}
                  style={styles.name}
                  placeholderTextColor={
                    errors.username ? colors.WARNING : colors.LIGHT_GRAY
                  }
                  label="Username"
                  onChangeText={handleChange('username')}
                  autoCompleteType="off"
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  //onSubmitEditing={handlePress}
                />
                {errors.username && (
                  <HelperText
                    testID="errorID"
                    type="error"
                    visible={true}
                    style={[sizes.fonts.caption, styles.error]}>
                    {errors.username}
                  </HelperText>
                )}

                <TextInput
                  defaultValue={firstname}
                  style={styles.name}
                  label="First Name (Optional)"
                  onChangeText={handleChange('firstname')}
                  autoCompleteType="off"
                  autoCorrect={false}
                  onSubmitEditing={handleSubmit}
                  clearButtonMode="while-editing"
                />

                <View style={styles.buttonContainer}>
                  <LargeButton
                    title="Next"
                    onPress={handleSubmit}
                    testID="buttonID"
                  />

                  <TouchableOpacity
                    style={styles.loginContainer}
                    onPress={props.onBackPress}>
                    <Text style={[sizes.fonts.caption, styles.idtext]}>
                      Go Back
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

export default FirstName;
