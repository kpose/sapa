import React from 'react';
import {View, Image, TouchableOpacity, Pressable} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {colors} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

/* utils  */
import {useAppSelector} from '~redux/reduxhooks';

interface Props {
  data: {
    createdAt: string;
    imageUrl: string;
    category: string;
    amount: number;
    marchant: string;
    type?: string;
    note: string;
    iconTitle: string;
    uuid: string;
  };
}

const TransactionCard = ({data}: Props) => {
  const {symbol} = useAppSelector(state => state.user);
  const {
    createdAt,
    imageUrl,
    category,
    amount,
    marchant,
    type,
    note,
    iconTitle,
    uuid,
  } = data;
  const timestamp = moment(createdAt).format('D MMM, YYYY');

  const navigation = useNavigation();

  const backgroundColor =
    type === 'Expense' ? colors.SECONDARY : colors.PRIMARY;

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('EditWallet', {
          createdAt,
          imageUrl,
          marchant,
          category,
          amount,
          type,
          note,
          iconTitle,
          uuid,
        })
      }>
      <Surface style={styles.container}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image source={{uri: imageUrl}} style={styles.image} />
          ) : (
            <Image
              source={require('~assets/images/noImg.jpg')}
              style={styles.noImage}
            />
          )}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={[fonts.caption, {color: colors.LIGHT_GRAY}]}>
            {timestamp}
          </Text>

          {category && (
            <Surface
              style={[styles.category, {backgroundColor: backgroundColor}]}>
              <Text style={[fonts.caption, styles.categoryText]}>
                {category}
              </Text>
            </Surface>
          )}

          {marchant ? (
            <Text style={[fonts.caption, styles.note]}>{marchant}</Text>
          ) : null}
          <Text style={[fonts.caption, styles.amount]}>{amount}</Text>
        </View>
      </Surface>
    </Pressable>
  );
};

export default TransactionCard;
