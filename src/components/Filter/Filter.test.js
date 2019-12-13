import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Filter from 'components/Filter/Filter';

describe('Filter', () => {
  test('should handle click event', () => {
    const onClickMock = jest.fn()
    const { container } = render(<Filter onClick={onClickMock} />)
    const component = container.firstChild
    fireEvent.click(component)
    expect(onClickMock).toBeCalled()
  })

});
