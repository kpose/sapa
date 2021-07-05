import {Dimensions, PixelRatio} from 'react-native';

const currentDate = new Date();
const currentDateTime = currentDate.getTime();
const last30DaysDate = new Date(
  currentDate.setDate(currentDate.getDate() - 30),
);
const last30DaysDateTime = last30DaysDate.getTime();
const last7DaysDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
const last7DaysDateTime = last7DaysDate.getTime();

/* calculate single wallet total */
export const walletTotal = transactions => {
  if (transactions.length === 0) {
    return;
  }
  const transact = transactions
    .map(item => item.amount.replace(/[^0-9\-]+/g, ''))
    .reduce((prev, next) => Number(prev) + Number(next));
  return transact;
};

/* calculate total transactions in last 7 days for single wallet */
export const last7Days = transactions => {
  const last7DaysTransaction = transactions
    .filter(x => {
      const elementDateTime = new Date(x.createdAt).getTime();
      if (
        elementDateTime <= currentDateTime &&
        elementDateTime > last7DaysDateTime
      ) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  if (last7DaysTransaction.length === 0) {
    return;
  }
  const total = last7DaysTransaction
    .map(item => item.amount.replace(/[^0-9\-]+/g, ''))
    .reduce((prev, next) => Number(prev) + Number(next));
  return total;
};

/* calculate total transactions in last 30 days for single wallet */
export const last30Days = transactions => {
  console.log(transactions);

  const last30DaysTransaction = transactions
    .filter(x => {
      const elementDateTime = new Date(x.createdAt).getTime();
      if (
        elementDateTime <= currentDateTime &&
        elementDateTime > last30DaysDateTime
      ) {
        return true;
      }
      return false;
    })
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  if (last30DaysTransaction.length === 0) {
    return;
  }
  const total = last30DaysTransaction
    .map(item => item.amount.replace(/[^0-9\-]+/g, ''))
    .reduce((prev, next) => Number(prev) + Number(next));
  return total;
};
