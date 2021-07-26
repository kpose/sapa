import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {BottomTabProps} from '~definitions/navigationTypes';
import {EmptyAnime, TransactionCard} from '~components';
import styles from './styles';
import {useAppSelector} from '~redux/reduxhooks';

const WalletDetails = ({route}: BottomTabProps) => {
  const {transactions} = route.params.data;
  //const {needed2} = useAppSelector(state => state.wallet);

  //console.log(needed2);

  interface transactionProps {
    createdAt: string;
  }

  const sortedTransactions = transactions
    .slice()
    .sort((a: transactionProps, b: transactionProps) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });

  const renderWallets = useCallback(
    ({item}) => <TransactionCard data={item} />,
    [],
  );

  const keyExtractor = useCallback(item => item.uuid.toString(), []);

  return (
    <View style={styles.container}>
      {sortedTransactions.length ? (
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
