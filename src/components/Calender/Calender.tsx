import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {colors} from '~utils';
import {CalenderPopup} from '~modals';

const Calender = () => {
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState<string>('');
  const onModalClose = () => setVisible(false);
  const onDayPress = (day: {dateString: string}) => {
    setVisible(true);
    setDay(day.dateString);
  };

  return (
    <View>
      <CalenderPopup visible={visible} onClose={onModalClose} day={day} />
      <Calendar
        enableSwipeMonths={true}
        style={styles.calender}
        onDayPress={day => onDayPress(day)}
        theme={{
          textSectionTitleColor: colors.SECONDARY,
          //textSectionTitleDisabledColor: '#d9e1e8',
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
