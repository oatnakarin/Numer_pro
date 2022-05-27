import { render, screen } from '@testing-library/react';
import App from './App';
import {fireEvent} from '@testing-library/react'
import BisecTest from './test_method';

test('renders learn react link', () => {
  render(<App />);
})

test('TestBisectionMethod', () => {
  const setup = () => {
    const utils = render(<BisecTest />)
    const input = screen.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }

  const {input} = setup()
 // console.log(input)
  fireEvent.change(input, {target:{value:['x^4-13','1.5','2']}})
  expect(input.value).toBe('1.89882988')
  
});





