import React from 'react';
import './Notifications.css';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div className="notification-title">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="notifications">
            <button
              style={{
                position: "absolute",
                display: "flex",
                background: "none",
                borderStyle: "none",
                right: "1rem",
                top: "0.8rem",
                width: "0.5rem",
                height: "0.5rem",
              }}
              onClick={() => console.log('Close button has been clicked')}
              aria-label="Close"
            >
              <img
                style={{ width: "0.5rem", height: "0.5rem" }}
                src={closebtn}
                alt='Close'
              />
            </button>
            <p>Here is the list of notifications</p>
            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  notifications: [],
};

export default Notifications;
