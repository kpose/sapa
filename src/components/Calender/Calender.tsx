import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {colors, hp} from '../../utils';

const Calender = () => {
  return (
    <View>
      <Calendar
        enableSwipeMonths={true}
        style={{
          borderColor: colors.PRIMARY,
          height: hp(66),
          //borderWidth: 5,
          //borderRadius: 20,
        }}
        onDayPress={(day: {}) => {
          console.log('selected day', day);
        }}
        theme={{
          textSectionTitleColor: colors.SECONDARY,
          textSectionTitleDisabledColor: '#d9e1e8',
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
