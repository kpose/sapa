import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Home} from '../src/screens';

describe('Testing the home screen', () => {
  it('opens wallet modal when `add wallet` button is clicked', () => {
    const {getByText} = render(<Home />);
    const addWalletButton = getByText('Add wallet');
    const walletModal = getByText('Create a new wallet');

    fireEvent.press(addWalletButton);
    expect(walletModal).toBeDefined();
  });
});
