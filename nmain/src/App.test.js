import { render, screen } from '@testing-library/react';
import App from './App';
import {fireEvent} from '@testing-library/react'
import BisecTest from './test_method/test_method';
import NewtonTest from './test_method/test_newton'
import Testinput from './test_method/test_input'
import FalseTest from './test_method/test_method';


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
  fireEvent.change(input, {target:{value:['x^4-13','1.5','2']}})
  expect(input.value).toBe('1.898829')
  
});

test('FalsepointTest', () => {
  const setup =  () => {
    const utils = render(<FalseTest />)
    const input = screen.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }

  const {input} = setup()
  fireEvent.change(input, {target:{value:['x^4-13','1.5','2']}})
  expect(input.value).toBe('1.898829')
  fireEvent.change(input, {target:{value:['x^3 + 4','-2','-1']}})
  expect(input.value).toBe('-1.587401')
  fireEvent.change(input, {target:{value:['x^3*2-4','1','2']}})
  expect(input.value).toBe('1.259921')
  
});

test('NewtonRapsonTest', () => {
  const setup =  () => {
    const utils = render(<NewtonTest />)
    const input = screen.getByLabelText('cost-input')
    console.log(utils)
    return {
      input,
      ...utils,
    }
  }

  const {input} = setup()
  fireEvent.change(input, {target:{value:['x^4-13','1.5']}})
  expect(input.value).toBe('1.898829')
  fireEvent.change(input, {target:{value:['x^3 + 4','-2']}})
  expect(input.value).toBe('-1.587401')
  fireEvent.change(input, {target:{value:['x^3*2-4','1']}})
  expect(input.value).toBe('1.259921')
  
});

test('TestInput', () => {

  const setup = () => {
    const utils = render(<Testinput />)
    const input = screen.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }
  
  const {input} = setup()
  fireEvent.change(input, {target:{value:['x^4-13','1.5']}})
  expect(input.value).toBe('valid input')
})










