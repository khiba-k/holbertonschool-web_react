import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import newContext from '../Context/context';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import withLogging from '../HOC/WithLogging';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get('/notifications.json');
        setNotifications(data);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching notifications:', error);
        }
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      if (user.isLoggedIn) {
        try {
          const { data } = await axios.get('/courses.json');
          setCourses(data);
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching courses:', error);
          }
        }
      } else {
        setCourses([]);
      }
    };

    fetchCourses();
  }, [user]);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: '', password: '', isLoggedIn: false });
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        logOut();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [logOut]);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const handleDisplayDrawer = () => setDisplayDrawer(true);
  const handleHideDrawer = () => setDisplayDrawer(false);

  const WithLogin = useMemo(() => withLogging(Login), []);
  const WithCourseList = useMemo(() => withLogging(CourseList), []);

  return (
    <newContext.Provider value={{ user, logOut }}>
      <div className={css(styles.notificationsHeader)}>
        <Header />
        <div className={css(styles.rootNotifications)}>
          <Notifications
            notifications={notifications}
            isDrawerDisplayed={displayDrawer}
            showDrawer={handleDisplayDrawer}
            hideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
      </div>

      {user.isLoggedIn ? (
        <div className={css(styles.Body)}>
          <BodySectionWithMarginBottom title="Course List">
            <WithCourseList courses={courses} />
          </BodySectionWithMarginBottom>
        </div>
      ) : (
        <div className={css(styles.Body)}>
          <BodySectionWithMarginBottom title="Log in to continue">
            <WithLogin logIn={logIn} email={user.email} password={user.password} />
          </BodySectionWithMarginBottom>
        </div>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer />
    </newContext.Provider>
  );
};

const styles = StyleSheet.create({
  notificationsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomStyle: 'solid',
    borderColor: '#e1003c',
    height: '15vh',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  rootNotifications: {
    '@media (max-width: 900px)': {
      order: -1,
    },
  },
  Body: {
    height: '55vh',
  },
});

export default App;