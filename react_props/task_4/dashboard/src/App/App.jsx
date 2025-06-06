import CourseList from '../CourseList/CourseList'
import '../CourseList/CourseList.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Notifications from '../Notifications/Notifications'
import './App.css'

function App({ isLoggedIn = false }) {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  const coursesList = [
    { id: 1, name: "ES6", credit: "60" },
    { id: 2, name: "Webpack", credit: "20" },
    { id: 3, name: "React", credit: "40" },
  ];

  return (
    <>
      <div className='root-notifications'>
        <Notifications notifications={notificationsList} />
      </div>
      <Header />
      {isLoggedIn ? (<div className='courses-body'><CourseList courses={coursesList} /></div>) : (<Login />)}
      <Footer />
    </>
  )
}

export default App
