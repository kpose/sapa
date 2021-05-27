import React from 'react';
import {View} from 'react-native';

/* utils and files */
import styles from './styles';
import {Text, Divider} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {useSelector} from 'react-redux';
import {RootState} from '~redux/store';

const ProfileSettings = () => {
  const {firstname, email, lastname} = useSelector(
    (state: RootState) => state.userData,
  );
  return (
    <View style={styles.container}>
      <View style={styles.username}>
        <Text style={[fonts.smallerCaption, styles.caption]}>USERNAME</Text>
        <Text style={[fonts.caption]}>{email.toLowerCase()}</Text>
      </View>
      <Text style={[fonts.smallerCaption, styles.title]}>First Name</Text>
      <Text style={[fonts.caption, styles.first]}>
        {firstname.toUpperCase()}
      </Text>
      <Divider style={styles.divide} />
      <Text style={[fonts.smallerCaption, styles.title]}>Last Name</Text>
      <Text style={[fonts.caption, styles.first]}>
        {lastname.toUpperCase()}
      </Text>
      <Divider style={styles.divide} />
    </View>
  );
};

export default ProfileSettings;
