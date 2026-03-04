import { useContext } from 'react'
import { getCurrentYear, getFooterCopy } from '../utils/utils'
import AppContext from '../Context/context'

function Footer({ isIndex = false }) {
  const currentYear = getCurrentYear()
  const footerCopy = getFooterCopy(isIndex)
  const { user } = useContext(AppContext)

  return (
    <>
      <div className="App-footer flex justify-center items-center border-t-4 border-[color:var(--main-color)] bottom-0 mt-auto">
        <p className="italic text-xl p-1 max-[912px]:text-base">
          Copyright {currentYear} - {footerCopy}
        </p>
      </div>
      {user.isLoggedIn && (
        <p className="text-center">
          <a href="#" className="text-blue-600 underline">Contact us</a>
        </p>
      )}
    </>
  )
}

export default Footer
