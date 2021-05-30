import * as React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import {LargeButton} from '../src/components';

describe('Testing large button component', () => {
  const wrapper = renderer.create(<LargeButton />);

  it('renders correctly', () => {
    expect(wrapper.toJSON()).toBeTruthy();
  });

  it('calls onPress when fired', async () => {
    const onPress = jest.fn();
    const testID = 'button';
    const {getByTestId} = await render(
      <LargeButton onPress={onPress} title="largebutton" testID={testID} />,
    );
    const button = getByTestId(testID);
    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
