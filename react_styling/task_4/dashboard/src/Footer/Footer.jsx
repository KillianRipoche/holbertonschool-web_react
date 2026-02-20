import { getCurrentYear, getFooterCopy } from '../utils/utils'

function Footer({ isIndex = false }) {
  const currentYear = getCurrentYear()
  const footerCopy = getFooterCopy(isIndex)

  return (
    <>
      <div className="App-footer flex justify-center items-center border-t-4 border-[color:var(--main-color)] bottom-0 mt-auto">
        <p className="italic text-xl p-1 max-[912px]:text-base">Copyright {currentYear} - {footerCopy}</p>
      </div>
    </>
  )
}

export default Footer
