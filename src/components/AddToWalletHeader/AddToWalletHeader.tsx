import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import styles from './styles';

/* files and utils */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from '~utils';
import {fonts} from '~utils/fonts';

interface Props {
  closeScreen: () => void;
}

const AddToWalletHeader = ({closeScreen}: Props) => {
  const [xpense, setXpense] = useState(true);
  const [amount, setAmount] = useState<string>('');
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: xpense ? colors.SECONDARY : colors.PRIMARY},
      ]}>
      <SafeAreaView style={styles.headRow}>
        <TouchableOpacity onPress={closeScreen}>
          <Icon
            name="close-thick"
            size={sizes.regularIconSize}
            color={colors.WHITE}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setXpense(true)}
            style={[
              styles.expense,
              {
                backgroundColor: xpense
                  ? colors.SEMI_TRANSPARENT
                  : 'transparent',
              },
            ]}>
            <Text style={[fonts.caption]}>Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.expense,
              {
                backgroundColor: xpense
                  ? 'transparent'
                  : colors.SEMI_TRANSPARENT,
              },
            ]}
            onPress={() => setXpense(false)}>
            <Text style={[fonts.caption]}>Income</Text>
          </TouchableOpacity>
        </View>

        {/* submit new transaction */}
        <TouchableOpacity>
          <Icon
            name="check-bold"
            size={sizes.regularIconSize}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.bottomRow}>
        <TextInput
          onChangeText={value => setAmount(value)}
          style={[styles.input, fonts.bodyText]}
          placeholder={xpense ? '-' + ' 0.00' : '+' + ' 0.00'}
          underlineColor={xpense ? colors.SECONDARY : colors.PRIMARY}
          autoFocus={true}
          keyboardType="number-pad"
        />
        <TouchableOpacity>
          <Icon
            name="bullseye"
            size={sizes.navigationIconSize}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddToWalletHeader;
