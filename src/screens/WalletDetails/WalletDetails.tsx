import React, {useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {BottomTabProps} from '~definitions/navigationTypes';
import {AnimatedScrollView} from '~components';
import {EmptyAnime, TransactionCard} from '~components';
import styles from './styles';

const WalletDetails = ({route, navigation}: BottomTabProps) => {
  const {uid, title, transactions, refreshWallets} = route.params;
  const reversedTransactions = [].concat(transactions).reverse();

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

  const keyExtractor = useCallback(item => item.uuid.toString(), []);

  return (
    <AnimatedScrollView style={styles.container}>
      {transactions && transactions.length ? (
        <FlatList
          data={reversedTransactions}
          renderItem={renderWallets}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={7}
          windowSize={7}
          //nestedScrollEnabled={true}
        />
      ) : (
        <EmptyAnime />
      )}
    </AnimatedScrollView>
  );
};

export default WalletDetails;
