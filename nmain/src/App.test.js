import { render, screen } from '@testing-library/react';
import App from './App';
import {fireEvent} from '@testing-library/react'
import CostInput from './test_method';

test('renders learn react link', () => {
  render(<App />);
})

test('input value is updated correctly', () => {
  const setup = () => {
    const utils = render(<CostInput />)
    const input = screen.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }

  const {input} = setup()
  console.log(input)
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('$234')
  
});





