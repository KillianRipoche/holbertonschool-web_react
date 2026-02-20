import React from 'react'
import WithLogging from '../HOC/WithLogging'

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="App-body flex flex-col p-5 pl-10 h-[45vh] border-t-4 border-[color:var(--main-color)] max-[912px]:pl-5">
          <p className="text-xl">Login to access the full dashboard</p>
          <form action="" className="mt-8 text-lg max-[912px]:flex max-[912px]:flex-col max-[912px]:gap-2">
            <label htmlFor="email" className="pr-2 max-[912px]:flex max-[912px]:flex-col">
              Email:
              <input type="email" name="email" id="email" className="border rounded pl-2 max-[912px]:w-full" />
            </label>
            <label htmlFor="password" className="pl-2 pr-2 max-[912px]:flex max-[912px]:flex-col max-[912px]:pl-0">
              Password:
              <input type="password" name="password" id="password" className="border rounded pl-2 max-[912px]:w-full" />
            </label>
            <button className="label-button cursor-pointer border px-1 rounded ml-2 max-[912px]:ml-0 max-[912px]:w-20" type="submit">OK</button>
          </form>
        </div>
      </>
    )
  }
}
const LoginWithLogging = WithLogging(Login)
export default LoginWithLogging
