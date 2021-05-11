import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import styles from './styles';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//utils and files
import {fonts} from '../../utils/fonts';
import {LargeButton} from '../../components';
import {colors, sizes} from '../../utils';

const welcome = () => {
  const [blur, setBlur] = useState(true);
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
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        {blur && (
          <View style={styles.captionContainer}>
            <Text style={[styles.caption, fonts.bodyText]}>
              Keep track of your expenses for FREE.
            </Text>
            <FontAwesome
              name="hand-peace-o"
              size={sizes.navigationIconSize}
              style={styles.wave}
            />
          </View>
        )}

        {blur && (
          <View style={styles.buttonContainer}>
            <LargeButton />
          </View>
        )}

        {blur && (
          <View style={styles.loginContainer}>
            <Text style={[sizes.fonts.caption, styles.idtext]}>
              Have a user ID?
            </Text>
            <TouchableOpacity>
              <Text style={[sizes.fonts.caption]}>Log In</Text>
            </TouchableOpacity>
          </View>
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
