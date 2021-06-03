import * as React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react-native';
import {Email} from '../src/components';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(cleanup);

describe('Testing email component', () => {
  it('should show error when email field is ignored', async () => {
    const initialState = {
      username: '',
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const email = 'user@mail.com';
    const password = 'user123456';

    const {getByTestId, getByText, queryByText} = render(
      <Provider store={store}>
        <Email onButtonPress={() => null} onBackPress={() => null} />
      </Provider>,
    );

    const emailInput = getByTestId('usernameID');
    const passwordInput = getByTestId('passwordID');
    const button = getByText('Done');

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);

      fireEvent.changeText(passwordInput, password);
      expect(passwordInput.props.value).toBe(password);

      fireEvent.press(button);
      expect(getByTestId('errorEmailID')).toBeDefined();
      //expect(queryByText(''))
    });
  });
});
