import React from 'react';
import {Pressable, View} from 'react-native';
import {Surface, Portal, Modal, Text, Divider} from 'react-native-paper';
import {colors, hp, wp} from '~utils';
import {fonts} from '~utils/fonts';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteTransactionModal = ({
  visible,
  onCancel,
  onDelete,
  onDismiss,
}: Props) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.container}>
        <Surface style={styles.container}>
          <Text style={[fonts.modalTextInput, styles.text]}>
            Are you sure? Pressing yes will parmenently delete it, and it will
            not be recoverable.
          </Text>
          <Divider style={styles.divider} />

          <View style={styles.bottomRow}>
            <Pressable onPress={onCancel}>
              <Text style={[fonts.modalButton, {color: colors.PRIMARY}]}>
                Cancel
              </Text>
            </Pressable>

            <Divider style={{height: '100%', width: wp(1)}} />
            <Pressable onPress={onDelete}>
              <Text style={[fonts.modalButton, {color: colors.PRIMARY}]}>
                Yes
              </Text>
            </Pressable>
          </View>
        </Surface>
      </Modal>
    </Portal>
  );
};

export default DeleteTransactionModal;
