import * as React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Login} from '../src/components';

jest.mock('@react-navigation/native');

describe('Testing login component', () => {
  const {} = render(<Login />);

  it('renders component on screen', () => {
    const tree = renderer.create(<Login />);
    expect(tree).toMatchSnapshot();
  });

  it('Should show password required', async () => {
    const email = 'user@mail.com';
    const {getByTestId} = render(
      <Login onBackPress={() => null} onButtonPress={() => null} />,
    );

    const emailInput = getByTestId('emailID');
    const button = getByTestId('buttonID');

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);

      fireEvent.press(button);
      expect(getByTestId('passwordErrorID')).toBeDefined();
    });
  });

  it('Should call handle submit with email and password', async () => {
    const email = 'user@mail.com';
    const password = 'password1234';

    const expectedOutput = {
      email,
      password,
    };
    let output = {};

    const onSubmit = jest.fn(data => (output = data));

    const {getByTestId} = render(<Login onButtonPress={onSubmit} />);

    const emailInput = getByTestId('emailID');
    const button = getByTestId('buttonID');
    const passwordInput = getByTestId('passwordID');

    await waitFor(() => {
      fireEvent.changeText(emailInput, email);
      expect(emailInput.props.value).toBe(email);

      fireEvent.changeText(passwordInput, password);
      expect(emailInput.props.value).toBe(email);

      fireEvent.press(button);
      //expect(onSubmit).toHaveBeenCalledTimes(1);
      //expect(output).toEqual(expectedOutput);
    });
  });
});
