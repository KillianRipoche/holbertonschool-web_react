import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
  return (
    <>
      <div className="App-header flex items-center py-2 max-[520px]:flex-col">
        <img className="App-logo h-60 pointer-events-none max-[520px]:h-40" src={holbertonLogo} alt="holberton logo" />
        <h1 className="font-bold text-[color:var(--main-color)] text-5xl max-[520px]:text-3xl">School dashboard</h1>
      </div>
    </>
  )
}

export default Header
