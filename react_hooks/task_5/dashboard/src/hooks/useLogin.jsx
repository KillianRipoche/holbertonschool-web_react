import { useState, useCallback } from 'react'

export default function useLogin(onLogin) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableSubmit, setEnableSubmit] = useState(false)

  const validateForm = useCallback((emailValue, passwordValue) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = emailRegex.test(emailValue)
    const isPasswordValid = passwordValue.length >= 8
    setEnableSubmit(isEmailValid && isPasswordValid)
  }, [])

  const handleChangeEmail = useCallback((event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
    validateForm(newEmail, password)
  }, [password, validateForm])

  const handleChangePassword = useCallback((event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
    validateForm(email, newPassword)
  }, [email, validateForm])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    if (enableSubmit && onLogin) {
      onLogin(email, password)
    }
  }, [email, password, enableSubmit, onLogin])

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  }
}
