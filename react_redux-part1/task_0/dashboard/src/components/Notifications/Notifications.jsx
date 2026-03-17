import { memo } from 'react'
import closeButton from '../../assets/close-icon.png'
import NotificationItem from '../NotificationItem/NotificationItem'
import PropTypes from 'prop-types'

const Notifications = memo(function Notifications({
  displayDrawer = false,
  notifications = [],
  handleDisplayDrawer = () => { },
  handleHideDrawer = () => { },
  markNotificationAsRead = () => { }
}) {
  const shouldAnimate = notifications.length > 0 && !displayDrawer
  const animationClass = shouldAnimate ? 'animate-bounce' : ''

  return (
    <>
      <div
        className={`notification-title absolute right-3 top-1 cursor-pointer ${animationClass}`}
        onClick={handleDisplayDrawer}
      >
        Your notifications
      </div>
      {displayDrawer && (
        <div className="notification-items relative border-[3px] border-dotted border-[color:var(--main-color)] p-1.5 w-1/4 float-right mt-7 max-[912px]:fixed max-[912px]:inset-0 max-[912px]:w-full max-[912px]:h-full max-[912px]:bg-white max-[912px]:z-[1000] max-[912px]:p-3 max-[912px]:border-none max-[912px]:float-none max-[912px]:mt-0">
          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <div className="relative">
                <p className='m-0'>Here is the list of notifications</p>
                <button
                  className="absolute cursor-pointer right-0 top-0 bg-transparent border-none"
                  onClick={handleHideDrawer}
                  aria-label='Close'
                >
                  <img src={closeButton} alt="close-button" className="w-3 h-3" />
                </button>
                <ul className='list-[square] pl-5 max-[912px]:list-none max-[912px]:pl-0'>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => markNotificationAsRead(notification.id)}
                      id={notification.id}
                    />
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}, (prevProps, nextProps) => {
  if (prevProps.displayDrawer !== nextProps.displayDrawer) {
    return false
  }

  if (prevProps.notifications.length !== nextProps.notifications.length) {
    return false
  }

  return true
})

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
}

Notifications.displayName = 'Notifications'

export default Notifications
