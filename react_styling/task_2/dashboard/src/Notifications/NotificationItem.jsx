import React from 'react';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const colorClass = type === 'urgent' ? 'text-urgent-notification' : 'text-default-notification';

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={colorClass}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }
    return (
      <li
        data-notification-type={type}
        className={colorClass}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
