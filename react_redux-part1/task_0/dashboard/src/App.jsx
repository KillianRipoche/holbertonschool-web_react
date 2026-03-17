import { useReducer, useCallback, useEffect } from 'react'
import axios from 'axios'
import BodySection from './components/BodySection/BodySection'
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom'
import Notifications from './components/Notifications/Notifications'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import CourseListWithLogging from './pages/CourseList/CourseList'
import { getLatestNotification } from './utils/utils'
import { appReducer, initialState, APP_ACTIONS } from './appReducer'

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications.json')
        const fetchedNotifications = response.data.notifications
        const updatedNotifications = fetchedNotifications.map(notif => {
          if (notif.html && notif.html.__html === "") {
            return {
              ...notif,
              html: { __html: getLatestNotification() }
            }
          }
          return notif
        })
        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: { notifications: updatedNotifications }
        })
      } catch (error) {
        console.error('Error fetching notifications', error)
      }
    }
    fetchNotifications()
  }, [])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (state.user.isLoggedIn) {
          const response = await axios.get('/courses.json')
          dispatch({
            type: APP_ACTIONS.SET_COURSES,
            payload: { courses: response.data.courses }
          })
        } else {
          dispatch({
            type: APP_ACTIONS.SET_COURSES,
            payload: { courses: [] }
          })
        }
      } catch (error) {
        console.error('Error fetching courses', error)
      }
    }
    fetchCourses()
  }, [state.user.isLoggedIn])

  const logIn = useCallback((email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password }
    })
  }, [])

  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT })
  }, [])

  const handleDisplayDrawer = useCallback(() => {
    if (!state.displayDrawer) {
      dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER })
    }
  }, [state.displayDrawer])

  const handleHideDrawer = useCallback(() => {
    if (state.displayDrawer) {
      dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER })
    }
  }, [state.displayDrawer])

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`)
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_READ,
      payload: { id }
    })
  }, [])

  return (
    <div className="relative px-3 min-h-screen flex flex-col max-[912px]:px-2">
      <Notifications
        notifications={state.notifications}
        displayDrawer={state.displayDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />
      <div className="flex-1">
        <Header user={state.user} logOut={logOut} />
        {state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseListWithLogging courses={state.courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={logIn} email={state.user.email} password={state.user.password} />
          </BodySectionWithMarginBottom>
        )
        }
        <BodySection title="News from the School">
          <p>
            ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?
          </p>
        </BodySection>
      </div>
      <Footer user={state.user} />
    </div>
  )
}
