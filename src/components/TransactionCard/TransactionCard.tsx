import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {colors} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

/* utils  */
import {useAppSelector} from '~redux/reduxhooks';

interface Props {
  date: string;
  image: string;
  category: string;
  amount: number;
  marchant: string;
  type?: string;
  note: string;
  icon: string;
  transactionUUID: string;
}

const TransactionCard = ({
  date,
  image,
  category,
  amount,
  marchant,
  type,
  note,
  icon,
  transactionUUID,
}: Props) => {
  const {symbol} = useAppSelector(state => state.user);
  const timestamp = moment(date).format('D MMM, YYYY');

  const navigation = useNavigation();

  const backgroundColor =
    type === 'Expense' ? colors.SECONDARY : colors.PRIMARY;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EditWallet', {
          date,
          image,
          marchant,
          category,
          amount,
          type,
          note,
          icon,
          transactionUUID,
        })
      }>
      <Surface style={styles.container}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{uri: image}} style={styles.image} />
          ) : (
            <Text>Image</Text>
          )}
        </View>
        <View style={styles.detailsContainer}>
          <Text style={[fonts.smallerCaption, {color: colors.LIGHT_GRAY}]}>
            {timestamp}
          </Text>

          {category && (
            <Surface
              style={[styles.category, {backgroundColor: backgroundColor}]}>
              <Text style={[fonts.smallerCaption, styles.categoryText]}>
                {category}
              </Text>
            </Surface>
          )}
          {marchant && (
            <Text style={[fonts.smallerCaption, styles.note]}>{marchant}</Text>
          )}
          <Text style={[fonts.caption, styles.amount]}>{amount}</Text>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

export default TransactionCard;
