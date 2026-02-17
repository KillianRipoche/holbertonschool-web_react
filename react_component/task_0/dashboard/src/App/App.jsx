import './App.css'
import { Component } from 'react'
import Header from '../Header/Header.jsx'
import Notifications from '../Notifications/Notifications.jsx'
import Footer from '../Footer/Footer.jsx'
import Login from '../Login/Login.jsx'
import { getLatestNotification } from '../utils/utils.js'
import CourseList from '../CourseList/CourseList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  };

  static defaultProps = {
    isLoggedIn: false
  };

  render() {
    const markup = { __html: getLatestNotification() };
    const notificationsList = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: markup }
    ];
    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <>
        <div className='root-notifications'>
          <Notifications notifications={notificationsList} displayDrawer={false} />
        </div>
        <Header />
        <div className='main-body'>
          {this.props.isLoggedIn ?
            <CourseList courses={coursesList} />
            :
            <Login />
          }
        </div>
        <Footer isIndex={true} />
      </>
    );
  }
};

export default App;
