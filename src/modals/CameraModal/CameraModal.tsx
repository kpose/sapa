import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import styles from './styles';

interface Props {
  cameraPress: () => void;
  photoPress: () => void;
}

const CameraModal = ({cameraPress, photoPress}: Props) => {
  return (
    <Surface style={styles.container}>
      <TouchableOpacity onPress={photoPress}>
        <Surface style={styles.card}>
          <Text style={[fonts.body, styles.text]}>Select from gallery</Text>
        </Surface>
      </TouchableOpacity>

      <TouchableOpacity onPress={cameraPress}>
        <Surface style={styles.card}>
          <Text style={[fonts.body, styles.text]}>Take new photo</Text>
        </Surface>
      </TouchableOpacity>
    </Surface>
  );
};

export default CameraModal;
