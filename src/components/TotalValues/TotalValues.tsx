import React from 'react';
import {TextInputMask} from 'react-native-masked-text';
import {colors} from '~utils';
import {fonts} from '~utils/fonts';
import {useAppSelector} from '~redux/reduxhooks';

interface Props {
  value: string | number;
  color: string;
}

const TotalValues = ({value, color}: Props) => {
  const {symbol} = useAppSelector(state => state.user);
  return (
    <TextInputMask
      type={'money'}
      value={value ? value : 0}
      editable={false}
      options={{
        precision: 0,
        separator: '.',
        delimiter: ',',
        unit: value < 0 ? `- ${symbol}` : `${symbol}`,
      }}
      style={[fonts.smallerCaption, {color: color}]}
    />
  );
};

export default TotalValues;
