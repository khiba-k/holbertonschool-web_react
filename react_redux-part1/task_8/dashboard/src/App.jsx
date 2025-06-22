import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notifications from './components/Notifications/Notifications';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
import { login, logout } from './features/auth/authSlice';
import { fetchCourses } from './features/courses/coursesSlice';
import { fetchNotifications } from './features/notifications/notificationsSlice';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Notifications />
      <Header logOut={handleLogout} />
      {!isLoggedIn ? (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login login={handleLogin} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>
      )}
      <BodySection title="News from the School">
        <p>Holberton School news goes here</p>
      </BodySection>
      <Footer />
    </>
  );
}
