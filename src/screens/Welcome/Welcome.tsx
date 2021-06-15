import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//utils and files
import {FirstName, Started, StartedCurrency, Login, Email} from '~components';
import {sizes} from '~utils';
import {RouteStackProps} from '~definitions/navigationTypes';

const welcome = ({navigation}: RouteStackProps) => {
  const [blur, setBlur] = useState(true);
  const [startCurrency, setStartCurrency] = useState(false);
  const [started, setStarted] = useState(true);
  const [firstname, setFirstname] = useState(false);
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState(false);

  const openCurrency = () => {
    setStarted(false);
    setStartCurrency(true);
  };

  const openLogin = () => {
    setStarted(false);
    setLogin(true);
  };
  const closeCurrency = () => {
    setStartCurrency(false);
    setStarted(true);
  };

  const closeFirstName = () => {
    setFirstname(false);
    setStartCurrency(true);
  };

  const closeLogin = () => {
    setLogin(false);
    setStarted(true);
  };

  const openFirstname = () => {
    setStartCurrency(false);
    setFirstname(true);
  };

  const openEmail = () => {
    setFirstname(false);
    setEmail(true);
  };
  const closeEmail = () => {
    setEmail(false);
    setFirstname(true);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Video
          testID="videoID"
          source={require('../../assets/videos/pexels-karolina-grabowska-6326863.mp4')}
          style={[styles.backgroundVideo, blur && {opacity: 0.5}]}
          muted={true}
          repeat={true}
          paused={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        {blur && started && (
          <Started onStartedPress={openCurrency} onLoginPress={openLogin} />
        )}

        {blur && startCurrency && (
          <StartedCurrency
            onBackPress={closeCurrency}
            onButtonPress={openFirstname}
          />
        )}

        {blur && firstname && (
          <FirstName onBackPress={closeFirstName} onButtonPress={openEmail} />
        )}

        {blur && login && <Login onBackPress={closeLogin} />}

        {blur && email && (
          <Email
            onBackPress={closeEmail}
            //onButtonPress={() => navigation.navigate('Home')}
          />
        )}

        {blur ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setBlur(!blur)}>
            <MaterialCommunityIcons
              name="play-circle-outline"
              size={sizes.navigationIconSize}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setBlur(!blur)}
            style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="pause-circle-outline"
              size={sizes.navigationIconSize}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default welcome;
