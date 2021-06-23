import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Modal, Portal, Surface, Divider} from 'react-native-paper';
import {hp} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
  day: string;
}

const CalenderPopup = ({visible, onClose, day}: Props) => {
  return (
    <View>
      <Portal>
        <Modal visible={visible} contentContainerStyle={styles.modalcontainer}>
          <Surface style={styles.container}>
            <View style={styles.dateContainer}>
              <Text style={[fonts.caption, {fontWeight: 'bold'}]}>{day}</Text>
              <Text style={[fonts.caption, {marginTop: hp(0.5)}]}>
                Wednesday
              </Text>
            </View>
            <View style={styles.incomeContainer}>
              <Text style={[fonts.smallerCaption, styles.income]}>
                Total Income
              </Text>
              <Text>0.00</Text>
            </View>
            <View style={styles.incomeContainer}>
              <Text style={[fonts.smallerCaption, styles.income]}>
                Total Expense
              </Text>
              <Text>0.00</Text>
            </View>
            <Divider style={styles.divide} />
            <View style={styles.closeContainer}>
              <TouchableOpacity onPress={onClose}>
                <Text style={[fonts.caption, styles.close]}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[fonts.caption, styles.close]}>Add</Text>
              </TouchableOpacity>
            </View>
          </Surface>
        </Modal>
      </Portal>
    </View>
  );
};

export default CalenderPopup;
