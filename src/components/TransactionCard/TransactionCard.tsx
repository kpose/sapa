import React from 'react';
import {View} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {colors} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';

/* utils  */

interface Props {
  date: string;
  image?: string;
  category: string;
  amount: number;
  marchant: string;
  type?: string;
  note?: string;
}

const TransactionCard = ({
  date,
  image,
  category,
  amount,
  marchant,
  type,
  note,
}: Props) => {
  let isoDate = date;
  var timestamp = new Date(isoDate);

  const backgroundColor =
    type === 'Expense' ? colors.SECONDARY : colors.PRIMARY;

  return (
    <Surface style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[fonts.smallerCaption]}>
          {timestamp.toLocaleDateString('en-GB')}
        </Text>

        {category && (
          <Surface
            style={[styles.category, {backgroundColor: backgroundColor}]}>
            <Text style={[fonts.smallerCaption, {fontWeight: 'bold'}]}>
              {category}
            </Text>
          </Surface>
        )}
        <Text style={[fonts.smallerCaption, styles.note]}>{marchant}</Text>
        <Text style={[fonts.caption, styles.amount]}>{amount}</Text>
      </View>
    </Surface>
  );
};

export default TransactionCard;
