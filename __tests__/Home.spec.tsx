import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../src/screens';

describe('Testing the home screen', () => {
  it('whateever hap', () => {
    const {getByText} = render(<Home />);

    const addWallet = getByText('Add wallet');
  });
});
