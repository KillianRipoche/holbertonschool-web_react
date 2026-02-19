import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className="App-header flex items-center p-5 border-b-[3px] border-main-color">
      <img src={holbertonLogo} alt="holberton logo" className="w-52 h-auto" />
      <h1 className="text-main-color ml-5 text-3xl">School dashboard</h1>
    </div>
  );
}

export default Header;
