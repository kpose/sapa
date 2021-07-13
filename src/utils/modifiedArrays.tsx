import {useAppSelector} from '~redux/reduxhooks';

export const modifiedExpenseArray = (array: [], symbol: any) => {
  if (!array.length) {
    return;
  }
  const expenseArray = array
    .filter((item: any) => {
      return item.type === 'Expense';
    })
    .map((obj: any) => ({
      ...obj,
      amount: obj.amount.substring(3),
    }))
    .map(({amount, ...rest}) => ({
      ...rest,
      amount: parseFloat(amount.replace(/,/g, '')),
    }));
  const counts = expenseArray.reduce((prev, curr) => {
    let count = prev.get(curr.category) || 0;
    prev.set(curr.category, curr.amount + count);
    return prev;
  }, new Map());

  const modified = [...counts].map(([category, amount]) => {
    return {category, amount};
  });

  const finalModification = modified.map(
    ({category: label, amount: value}) => ({
      value,
      label,
    }),
  );

  return finalModification;
};

export const modifiedIncomeArray = (array: [], symbol: any) => {
  if (!array.length) {
    return;
  }

  const expenseArray = array
    .filter((item: any) => {
      return item.type === 'Income';
    })
    .map((obj: any) => ({
      ...obj,
      amount: obj.amount.substring(3),
    }))
    .map(({amount, ...rest}) => ({
      ...rest,
      amount: parseFloat(amount.replace(/,/g, '')),
    }));
  const counts = expenseArray.reduce((prev, curr) => {
    let count = prev.get(curr.category) || 0;
    prev.set(curr.category, curr.amount + count);
    return prev;
  }, new Map());

  const modified = [...counts].map(([category, amount]) => {
    return {category, amount};
  });

  const finalModification = modified.map(
    ({category: label, amount: value}) => ({
      value,
      label,
    }),
  );

  return finalModification;
};
