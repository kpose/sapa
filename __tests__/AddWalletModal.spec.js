import * as React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {AddWallet} from '../src/modals';

describe('Testing add wallet modal', () => {
  const {getByTestId, getByPlaceholderText} = render(<AddWallet />);
  const wallet_name = 'dummywallet';
  const walletInput = getByPlaceholderText('What do we call this wallet?');
  const button = getByTestId('buttontestID');

  it('expect to show wallet title ', async () => {
    await waitFor(() => {
      fireEvent.changeText(walletInput, wallet_name);
      expect(walletInput.props.value).toBe(wallet_name);

      //fireEvent.press(button);
      /* expect expect here */
    });
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AddWallet />);
    expect(tree).toMatchSnapshot();
  });
});
