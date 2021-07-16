import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {Surface, Portal, Modal, Text, Divider} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import {fonts} from '~utils/fonts';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  date: string;
  onConfirm: Function;
}

const DatePickerModal = ({visible, onDismiss, date, onConfirm}: Props) => {
  const [pickerDate, setPickerDate] = useState(date);
  const [dateValue, setDateValue] = useState(new Date(date));

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDateValue(currentDate);
    setPickerDate(currentDate);
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}>
        <Surface style={styles.container}>
          <Text style={[styles.header, fonts.heading]}>Pick a date</Text>
          <Divider style={styles.divider} />

          <DateTimePicker
            testID="dateTimePicker"
            value={dateValue}
            display="spinner"
            onChange={onChange}
            style={{backgroundColor: 'black'}}
          />
          <View style={styles.footer}>
            <Pressable onPress={onDismiss}>
              <Text style={[fonts.modalAction, styles.cancel]}>Cancel</Text>
            </Pressable>

            <Pressable onPress={() => onConfirm(pickerDate)}>
              <Text style={[fonts.modalAction, styles.cancel]}>Confirm</Text>
            </Pressable>
          </View>
        </Surface>
      </Modal>
    </Portal>
  );
};

export default DatePickerModal;
