/* eslint-disable jest/prefer-to-be-undefined */
import React from 'react'
import { screen, render } from '@testing-library/react'
import Opening from '../components/Opening'

test('Finds the heading element inside the Opening component', () => {
  render(<Opening />)
  const heading = screen.getByText('New Zealand')
  expect(heading).not.toBe(undefined)
})
