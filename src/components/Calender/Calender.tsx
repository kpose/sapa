import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {colors} from '~utils';
import {CalenderPopup} from '~modals';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '~redux/reduxhooks';

const Calender = () => {
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState<string>('');
  const navigation = useNavigation();
  const {uid, title} = useAppSelector(state => state.wallet.data);

  const weekday = moment(day).format('dddd');
  const date = moment(day).format('MMMM Do YYYY');

  const onModalClose = () => setVisible(false);
  const onDayPress = (day: {dateString: string}) => {
    setVisible(true);
    setDay(day.dateString);
  };

  const addtoDay = () => {
    setVisible(false);
    navigation.navigate('AddToWallet', {
      uid,
      title,
    });
  };

  return (
    <View>
      <CalenderPopup
        visible={visible}
        onClose={onModalClose}
        day={date}
        weekday={weekday}
        onAdd={addtoDay}
      />
      <Calendar
        enableSwipeMonths={true}
        style={styles.calender}
        onDayPress={day => onDayPress(day)}
        theme={{
          textSectionTitleColor: colors.SECONDARY,
          todayTextColor: colors.PRIMARY,
          monthTextColor: colors.PRIMARY,
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default Calender;
