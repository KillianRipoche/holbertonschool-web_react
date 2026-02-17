import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    this.coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <div className="root-notifications">
          <Notifications displayDrawer={true} notifications={this.notificationsList} />
        </div>
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList courses={this.coursesList} /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
