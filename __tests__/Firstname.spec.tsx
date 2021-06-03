import * as React from 'react';
import {
  fireEvent,
  render,
  waitFor,
  cleanup,
} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {FirstName} from '../src/components';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

afterEach(cleanup);

describe('testing the firstname component', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  it('takes snapshot test of component', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <FirstName onButtonPress={() => null} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should show error when firstname is ignored', async () => {
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const username = 'user';

    const {getByTestId, getByText} = render(
      <Provider store={store}>
        <FirstName onButtonPress={() => null} />
      </Provider>,
    );

    const usernameInput = getByTestId('usernameID');
    const button = getByText('Next');

    await waitFor(() => {
      fireEvent.changeText(usernameInput, username);
      expect(usernameInput.props.value).toBe(username);

      fireEvent.press(button);
      expect(getByTestId('errorID')).toBeDefined();
    });
  });
});
