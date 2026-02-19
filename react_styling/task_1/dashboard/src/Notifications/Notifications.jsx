import React from 'react';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, notifications } = this.props;

    return (
      <>
        <div className="notification-title fixed top-0 right-0 p-2 bg-white cursor-pointer font-bold">
          <p className="m-0">Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="notifications fixed top-0 right-0 w-1/4 h-screen bg-white border-2 border-dashed border-main-color p-1.5 flex flex-col overflow-y-auto z-[1000]">
            <button
              className="absolute top-2 right-4 bg-transparent border-none cursor-pointer"
              onClick={() => console.log('Close button has been clicked')}
              aria-label="Close"
            >
              <img
                className="w-2 h-2"
                src={closebtn}
                alt='Close'
              />
            </button>
            <p className="my-2">Here is the list of notifications</p>
            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <ul className="m-0 p-0 list-none">
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

export default Notifications;
