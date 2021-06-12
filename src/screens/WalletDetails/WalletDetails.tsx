import React, {useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {BottomTabProps} from '~definitions/navigationTypes';

import {EmptyAnime, TransactionCard} from '~components';
import styles from './styles';

const WalletDetails = ({route, navigation}: BottomTabProps) => {
  const {uid, title, transactions, refresh} = route.params;

  const renderWallets = useCallback(
    ({item}) => (
      <TransactionCard
        date={item.createdAt}
        category={item.category}
        amount={item.amount}
        marchant={item.marchant}
        type={item.type}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.createdAt.toString(), []);

  return (
    <View style={styles.container}>
      {transactions && transactions.length ? (
        <FlatList
          data={transactions}
          renderItem={renderWallets}
          keyExtractor={keyExtractor}
          //inverted={true}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={7}
          windowSize={7}
        />
      ) : (
        <EmptyAnime />
      )}
    </View>
  );
};

export default WalletDetails;

{
  /* <EmptyAnime /> */
}
