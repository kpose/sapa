import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//utils and files
import {Started, StartedCurrency} from '../../components';
import {colors, sizes} from '../../utils';

const welcome = () => {
  const [blur, setBlur] = useState(true);
  const [startCurrency, setStartCurrency] = useState(false);
  const [started, setStarted] = useState(true);

  const openCurrency = () => {
    setStarted(false);
    setStartCurrency(true);
  };
  const closeCurrency = () => {
    setStartCurrency(false);
    setStarted(true);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Video
          source={require('../../assets/videos/pexels-karolina-grabowska-6326863.mp4')}
          style={[styles.backgroundVideo, blur && {opacity: 0.3}]}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          //paused={true}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        {blur && started && (
          <Started onStartedPress={openCurrency} onLoginPress={() => {}} />
        )}

        {blur && startCurrency && (
          <StartedCurrency
            onBackPress={closeCurrency}
            onButtonPress={() => console.log('L')}
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
