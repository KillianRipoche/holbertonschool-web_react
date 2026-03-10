import PropTypes from 'prop-types'
import useLogin from '../hooks/useLogin'

function Login({ logIn, email: initialEmail = '', password: initialPassword = '' }) {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useLogin(logIn)

  return (
    <>
      <div className="App-body flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-[color:var(--main-color)] max-[912px]:pl-5">
        <p className="text-xl">Login to access the full dashboard</p>
        <form onSubmit={handleSubmit} className="mt-8 text-lg max-[912px]:flex max-[912px]:flex-col max-[912px]:gap-2">
          <label htmlFor="email" className="pr-2 max-[912px]:flex max-[912px]:flex-col">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              value={email}
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
              value={password}
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
