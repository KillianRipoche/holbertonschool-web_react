import { useState, useEffect } from 'react'

export default function useLogin(onLogin) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableSubmit, setEnableSubmit] = useState(false)

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = emailRegex.test(email)
    const isPasswordValid = password.length >= 8
    setEnableSubmit(isEmailValid && isPasswordValid)
  }, [email, password])

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
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
