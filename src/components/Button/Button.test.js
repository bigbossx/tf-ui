import { fireEvent, getByText, render } from '@testing-library/react';
import React from 'react';
import Button from 'components/Button/Button';

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button text="一堆乱七八糟的按钮的文字!" />);

    getByText(container, '一堆乱七八糟的按钮的文字!');
  });
  test('should handle click event', () => {
    const onClickMock = jest.fn()
    const { container } = render(<Button text="点击事件" onClick={onClickMock} />)
    const component = container.firstChild
    fireEvent.click(component)
    expect(onClickMock).toBeCalled()
  })
  test('should display css', () => {
    const { container } = render(<Button text="一堆乱七八糟的按钮的文字!" />);
    const component = getByText(container, '一堆乱七八糟的按钮的文字!');
    expect(component).toHaveStyleRule('background', '#5cdb95');
  })
});
