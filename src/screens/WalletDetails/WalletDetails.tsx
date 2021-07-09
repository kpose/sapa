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
    <AnimatedScrollView style={styles.container}>
      {transactions && transactions.length ? (
        reversedTransactions.map((item: transactionProps, index) => {
          return (
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
              key={item.uuid}
            />
          );
        })
      ) : (
        <EmptyAnime />
      )}
    </AnimatedScrollView>
  );
};

export default WalletDetails;

{
  /* <FlatList
          data={reversedTransactions}
          renderItem={renderWallets}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={7}
          windowSize={7}
          //nestedScrollEnabled={true}
        /> */
}
