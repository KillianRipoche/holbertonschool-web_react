import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

test('should render title', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toHaveTextContent(/School dashboard/i)
})

test('should render two paragraphs', () => {
  render(<App />)

  expect(screen.getByText(/Login to access the full dashboard/i))
  expect(screen.getByText(/Copyright 2026 - holberton School/i))
})

test('should render the image', () => {
  render(<App />)

  expect(screen.getByAltText(/holberton logo/i)).toBeInTheDocument()
})

test('should render two inputs for login', () => {
  const { container } = render(<App />)

  const emailInput = container.querySelector('input[type="email"]')
  const passwordInput = container.querySelector('input[type="password"]')

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
})

test('should render two label elements', () => {
  render(<App />)

  const emailLabel = screen.getByText(/email/i)
  const passwordLabel = screen.getByText(/password/i)

  expect(emailLabel).toBeInTheDocument()
  expect(passwordLabel).toBeInTheDocument()
})

test('should render one button', () => {
  render(<App />)
  const text = screen.getByText(/ok/i).textContent
  expect(text).toEqual(expect.stringMatching(/ok/i))
})
