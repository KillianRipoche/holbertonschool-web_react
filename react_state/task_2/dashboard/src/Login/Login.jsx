import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: props.email || '',
      password: props.password || '',
      enableSubmit: false,
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleLoginSubmit(event) {
    event.preventDefault()
    const { email, password } = this.state
    this.props.logIn(email, password)
  }

  handleChangeEmail(event) {
    const email = event.target.value
    this.setState({ email }, () => {
      this.validateForm()
    })
  }

  handleChangePassword(event) {
    const password = event.target.value
    this.setState({ password }, () => {
      this.validateForm()
    })
  }

  validateForm() {
    const { email, password } = this.state

    // Check if fields are not empty
    if (!email || !password) {
      this.setState({ enableSubmit: false })
      return
    }

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isEmailValid = emailRegex.test(email)

    // Password must be at least 8 characters
    const isPasswordValid = password.length >= 8

    // Enable submit only if both are valid
    const enableSubmit = isEmailValid && isPasswordValid

    this.setState({ enableSubmit })
  }

  render() {
    const { email, password, enableSubmit } = this.state

    return (
      <>
        <div className="App-body flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-[color:var(--main-color)] max-[912px]:pl-5">
          <p className="text-xl">Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit} className="mt-8 text-lg max-[912px]:flex max-[912px]:flex-col max-[912px]:gap-2">
            <label htmlFor="email" className="pr-2 max-[912px]:flex max-[912px]:flex-col">
              Email:
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChangeEmail}
                className="border rounded pl-2 max-[912px]:w-full"
              />
            </label>
            <label htmlFor="password" className="pl-2 pr-2 max-[912px]:flex max-[912px]:flex-col max-[912px]:pl-0">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={this.handleChangePassword}
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
