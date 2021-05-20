import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Surface, Divider} from 'react-native-paper';
import styles from './styles';

/* utils and files */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, hp, sizes, wp} from '../../utils';
import WalletCard from '../../components/WalletCard/WalletCard';
import {fonts} from '../../utils/fonts';

const WalletHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.titleContainer]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <FontAwesome
              name="chevron-left"
              size={sizes.regularIconSize}
              style={{color: colors.WHITE, marginRight: wp(2)}}
            />
          </TouchableOpacity>
          <Text style={[sizes.fonts.heading]}>Wallets</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome
            name="search"
            size={sizes.regularIconSize}
            style={{color: colors.WHITE}}
          />
        </TouchableOpacity>
      </View>

      <Surface style={styles.surface}>
        <View style={[styles.myWallet]}>
          <Text style={[fonts.bodyText, styles.wallet]}>My wallet</Text>
          <Text style={[fonts.caption]}>n0.00</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.days}>
            <Text style={[fonts.smallerCaption]}>Last 30 days</Text>
            <Text style={[fonts.caption]}>n0.00</Text>
          </View>

          <View>
            <Text style={[fonts.smallerCaption]}>Last 7 days</Text>
            <Text style={[fonts.caption]}>n0.00</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Icon
            name="plus"
            size={sizes.navigationIconSize}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </Surface>
    </SafeAreaView>
  );
};

export default WalletHeader;
