import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';

/* utils and files */
import {Text, Surface, Divider} from 'react-native-paper';
import {fonts} from '~utils/fonts';
import {SettingsItem, SettingsBottom} from '~components';
import {SettingsStackProps} from '~definitions/navigationTypes';
import {useAppSelector} from '~redux/reduxhooks';

const Settings = ({navigation}: SettingsStackProps) => {
  const {currency, email} = useAppSelector(state => state.user);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Surface style={styles.surface}>
        <Text style={[fonts.itemTitle, styles.username]}>Email:</Text>
        <Text style={[fonts.caption, styles.user]}>{email.toLowerCase()}</Text>
      </Surface>
      <SettingsItem
        title="Profile"
        leftIcon="account"
        rightIcon="chevron-right"
        onPress={() => navigation.navigate('ProfileSettings')}
      />
      <SettingsItem
        title="Currency"
        leftIcon="currency-ngn"
        rightIcon="chevron-right"
        onPress={() => navigation.navigate('CurrencySettings')}
        value={currency}
      />
      <SettingsItem
        title="Manage Categories"
        leftIcon="pin"
        rightIcon="chevron-right"
      />
      <SettingsItem
        title="Language"
        leftIcon="earth"
        rightIcon="chevron-right"
        onPress={() => navigation.navigate('LanguageSettings')}
      />
      <SettingsItem
        title="Subscription"
        leftIcon="gift"
        rightIcon="chevron-right"
      />
      <Divider style={styles.divide} />
      <SettingsBottom />
    </ScrollView>
  );
};

export default Settings;
