import WithLogging from '../HOC/WithLogging';

function Login() {
  return (
    <div className="App-body p-10 min-h-[60vh] border-t-[3px] border-main-color">
      <p className="text-lg mb-5">Login to access the full dashboard</p>
      <form className="flex flex-col gap-2.5 max-w-xs">
        <label htmlFor="email" className="font-bold">Email:</label>
        <input type="email" id="email" name="email" className="p-2 border border-gray-300 rounded" />
        <label htmlFor="password" className="font-bold">Password:</label>
        <input type="password" id="password" name="password" className="p-2 border border-gray-300 rounded" />
        <button type="button" className="py-2.5 px-5 bg-[var(--main-color)] text-white border-none rounded cursor-pointer font-bold hover:bg-[#c00034]">OK</button>
      </form>
    </div>
  );
}

export default WithLogging(Login);
