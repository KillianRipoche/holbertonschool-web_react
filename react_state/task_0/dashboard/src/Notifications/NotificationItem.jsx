import { PureComponent } from 'react'
import { getLatestNotification } from '../utils/utils'
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  static defaultProps = {
    markAsRead: () => { },
    type: "default",
    html: "",
    value: "",
    id: 1
  }

  render() {
    const { markAsRead, type, html, value, id } = this.props
    const innerHtml = { __html: getLatestNotification() }
    const mobileClasses = "max-[912px]:text-xl max-[912px]:border-b max-[912px]:border-black max-[912px]:py-2.5 max-[912px]:px-0"

    if (type === "default")
      return (
        <li onClick={() => markAsRead(id)}
          data-notification-type={type}
          className={`text-[color:var(--default-notification-item)] pl-1 ${mobileClasses}`}>
          {value}
        </li>
      )
    else if (type === "urgent" && html) {
      return (
        <li
          onClick={() => markAsRead(id)}
          data-notification-type={type}
          dangerouslySetInnerHTML={innerHtml}
          className={`text-[color:var(--urgent-notification-item)] pl-1 ${mobileClasses}`}>
        </li>
      )
    }
    else if (type === "urgent") {
      return (
        <li
          onClick={() => markAsRead(id)}
          data-notification-type={type}
          className={`text-[color:var(--urgent-notification-item)] pl-1 ${mobileClasses}`}
        >
          {value}
        </li>
      )
    }
  }
}

NotificationItem.propTypes = {
  markAsRead: PropTypes.func,
  type: PropTypes.string,
  html: PropTypes.object,
  value: PropTypes.string,
  id: PropTypes.number,
}

export default NotificationItem
