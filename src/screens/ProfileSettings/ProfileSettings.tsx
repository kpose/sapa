import React from 'react';
import {View} from 'react-native';

/* utils and files */
import styles from './styles';
import {Text, Divider} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {useAppSelector} from '~redux/reduxhooks';

const ProfileSettings = () => {
  const {firstname, email, username} = useAppSelector(state => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.username}>
        <Text style={[fonts.smallerCaption, styles.caption]}>EMAIL</Text>
        <Text style={[fonts.caption]}>{email.toLowerCase()}</Text>
      </View>
      <Text style={[fonts.smallerCaption, styles.title]}>First Name</Text>
      <Text style={[fonts.caption, styles.first]}>
        {firstname.toUpperCase()}
      </Text>
      <Divider style={styles.divide} />
      <Text style={[fonts.smallerCaption, styles.title]}>Username</Text>
      <Text style={[fonts.caption, styles.first]}>
        {username.toUpperCase()}
      </Text>
      <Divider style={styles.divide} />
    </View>
  );
};

export default ProfileSettings;
