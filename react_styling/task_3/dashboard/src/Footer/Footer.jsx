import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer w-full border-t-[3px] border-main-color p-5 text-center italic bg-white mt-auto">
      <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
    </div>
  );
}

export default Footer;
