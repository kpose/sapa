import React from 'react';
import {fireEvent, render, cleanup} from '@testing-library/react-native';
import {LargeButton} from '../src/components';

afterEach(cleanup);

describe('test large button component', () => {
  it('calls onpress when fired', async () => {
    const onPress = jest.fn();
    const testID = 'button';
    const {getByTestId} = await render(
      <LargeButton title="hello" onPress={onPress} testID={testID} />,
    );
    const largeButton = getByTestId(testID);
    fireEvent.press(largeButton);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
