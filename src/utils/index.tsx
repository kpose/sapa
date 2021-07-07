import * as sizes from './fonts';
import * as colors from './colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from './responsive';
import {last30Days, last7Days, walletTotal} from './totalCalculations';
import {modifiedExpenseArray} from './modifiedArrays';
import {modifiedIncomeArray} from './modifiedArrays';

export {
  sizes,
  wp,
  hp,
  colors,
  last30Days,
  last7Days,
  walletTotal,
  modifiedExpenseArray,
  modifiedIncomeArray,
};
