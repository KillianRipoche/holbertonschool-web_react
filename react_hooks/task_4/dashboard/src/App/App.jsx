import { useState, useCallback, useEffect, useMemo } from 'react'
import axios from 'axios'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseListWithLogging from '../CourseList/CourseList'
import AppContext from '../Context/context'

function App() {
  const [displayDrawer, setDisplayDrawer] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  })
  const [notifications, setNotifications] = useState([])
  const [courses] = useState([
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ])

  useEffect(() => {
    axios.get('/notifications.json')
      .then(response => {
        setNotifications(response.data)
      })
      .catch(error => {
        console.error('Error fetching notifications:', error)
        setNotifications([
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } },
        ])
      })
  }, [])

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true)
  }, [])

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false)
  }, [])

  const logIn = useCallback((email, password) => {
    setUser({
      email: email,
      password: password,
      isLoggedIn: true,
    })
  }, [])

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    })
  }, [])

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`)
    setNotifications((prevNotifications) =>
      prevNotifications.filter(notification => notification.id !== id)
    )
  }, [])

  const contextValue = useMemo(() => ({
    user: user,
    logOut: logOut,
  }), [user, logOut])

  return (
    <AppContext.Provider value={contextValue}>
      <div className="relative px-3 min-h-screen flex flex-col max-[912px]:px-2">
        <Notifications
          notifications={notifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
        <div className="flex-1">
          <Header />
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseListWithLogging courses={courses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={logIn} email={user.email} password={user.password} />
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

export default App
