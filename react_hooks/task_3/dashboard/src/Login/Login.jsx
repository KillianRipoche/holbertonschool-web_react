import { useState } from 'react'
import PropTypes from 'prop-types'

function Login({ logIn, email: initialEmail = '', password: initialPassword = '' }) {
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: initialPassword,
  })
  const [enableSubmit, setEnableSubmit] = useState(false)

  const handleChangeEmail = (event) => {
    const email = event.target.value
    const newFormData = { ...formData, email }
    setFormData(newFormData)

    // Validate form
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = emailRegex.test(email)
    const isPasswordValid = newFormData.password.length >= 8
    setEnableSubmit(isEmailValid && isPasswordValid)
  }

  const handleChangePassword = (event) => {
    const password = event.target.value
    const newFormData = { ...formData, password }
    setFormData(newFormData)

    // Validate form
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = emailRegex.test(newFormData.email)
    const isPasswordValid = password.length >= 8
    setEnableSubmit(isEmailValid && isPasswordValid)
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    logIn(formData.email, formData.password)
  }

  return (
    <>
      <div className="App-body flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-[color:var(--main-color)] max-[912px]:pl-5">
        <p className="text-xl">Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit} className="mt-8 text-lg max-[912px]:flex max-[912px]:flex-col max-[912px]:gap-2">
          <label htmlFor="email" className="pr-2 max-[912px]:flex max-[912px]:flex-col">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChangeEmail}
              className="border rounded pl-2 max-[912px]:w-full"
            />
          </label>
          <label htmlFor="password" className="pl-2 pr-2 max-[912px]:flex max-[912px]:flex-col max-[912px]:pl-0">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChangePassword}
              className="border rounded pl-2 max-[912px]:w-full"
            />
          </label>
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className="label-button cursor-pointer border px-1 rounded ml-2 max-[912px]:ml-0 max-[912px]:w-20 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </form>
      </div>
    </>
  )
}

Login.propTypes = {
  logIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
}

Login.defaultProps = {
  logIn: () => {},
  email: '',
  password: '',
}

export default Login
