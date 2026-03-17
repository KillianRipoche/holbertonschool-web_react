import { useState } from 'react'

export default function useLogin(onLogin) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableSubmit, setEnableSubmit] = useState(false)

  const validateForm = (emailValue, passwordValue) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = emailRegex.test(emailValue)
    const isPasswordValid = passwordValue.length >= 8
    return isEmailValid && isPasswordValid
  }

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
    setEnableSubmit(validateForm(newEmail, password))
  }

  const handleChangePassword = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
    setEnableSubmit(validateForm(email, newPassword))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (enableSubmit && onLogin) {
      onLogin(email, password)
    }
  }

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  }
}
