import React, {useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {BottomTabProps} from '~definitions/navigationTypes';
import {EmptyAnime, TransactionCard} from '~components';
import styles from './styles';

const WalletDetails = ({route, navigation}: BottomTabProps) => {
  const {uid, title, transactions, refreshWallets} = route.params;

  interface transactionProps {
    createdAt: string;
  }

  const sortedTransactions = transactions
    .slice()
    .sort((a: transactionProps, b: transactionProps) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });

  const renderWallets = useCallback(
    ({item}) => (
      <TransactionCard
        date={item.createdAt}
        category={item.category}
        amount={item.amount}
        marchant={item.marchant}
        type={item.type}
        image={item.imageUrl}
        icon={item.iconTitle}
        note={item.note}
        transactionUUID={item.uuid}
      />
    ),
    [],
  );

  interface transactionProps {
    createdAt: string;
    category: string;
    amount: number;
    marchant: string;
    type: string;
    imageUrl: string;
    iconTitle: string;
    note: string;
    uuid: string;
  }

  const keyExtractor = useCallback(item => item.uuid.toString(), []);

  return (
    <View style={styles.container}>
      {sortedTransactions && sortedTransactions.length ? (
        <FlatList
          data={sortedTransactions}
          renderItem={renderWallets}
          keyExtractor={keyExtractor}
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
