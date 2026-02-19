import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer fixed bottom-0 left-0 w-full border-t-[3px] border-main-color p-5 text-center italic bg-white">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
    </div>
  );
}

export default Footer;
