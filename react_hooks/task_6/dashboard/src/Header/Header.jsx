import { useContext } from 'react'
import holbertonLogo from '../assets/holberton-logo.jpg'
import PropTypes from 'prop-types'

function Header({ user = { isLoggedIn: false, email: '' }, logOut = () => {} }) {
  return (
    <>
      <div className="App-header flex items-center py-2 max-[520px]:flex-col">
        <img className="App-logo h-60 pointer-events-none max-[520px]:h-40" src={holbertonLogo} alt="holberton logo" />
        <h1 className="font-bold text-[color:var(--main-color)] text-5xl max-[520px]:text-3xl">School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <div id="logoutSection" className="p-2 text-lg">
          Welcome {user.email} (<span className="cursor-pointer text-blue-600 underline" onClick={logOut}>logout</span>)
        </div>
      )}
    </>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
  logOut: PropTypes.func,
}

export default Header
