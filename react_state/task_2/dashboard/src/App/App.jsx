import React from 'react'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseListWithLogging from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils'
import AppContext from '../Context/context'
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      notificationsList: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
      coursesList: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    }

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true })
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false })
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      }
    })
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      }
    })
  }

  handleLogout = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert('Logging you out')
      this.logOut()
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleLogout)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogout)
  }

  render() {
    const { displayDrawer, user, notificationsList, coursesList } = this.state
    const contextValue = {
      user: user,
      logOut: this.logOut,
    }

    return (
      <AppContext.Provider value={contextValue}>
        <div className="relative px-3 min-h-screen flex flex-col max-[912px]:px-2">
          <Notifications
            notifications={notificationsList}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className="flex-1">
            <Header />
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseListWithLogging courses={coursesList} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )
            }
            <BodySection title="News from the School">
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?
              </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App
