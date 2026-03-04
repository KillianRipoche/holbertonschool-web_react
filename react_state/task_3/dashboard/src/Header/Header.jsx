import React from 'react'
import holbertonLogo from '../assets/holberton-logo.jpg'
import AppContext from '../Context/context'

class Header extends React.Component {
  static contextType = AppContext

  render() {
    const { user, logOut } = this.context

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
}

export default Header
