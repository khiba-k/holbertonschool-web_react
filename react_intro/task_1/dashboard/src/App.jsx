import holbertonLogo from './assets/holberton-logo.jpg'
import './App.css'
import { getCurrentYear, getFooterCopy } from './utils'
import Notifications from './Notifications'

function App() {
  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className='App-header'>
        <img src={holbertonLogo} className="logo" alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>
        Login to access the full dashboard
        </p>
      </div>
      <div className="App-footer">
        <p>
          Copyright { getCurrentYear() } - { getFooterCopy(true) }
        </p>
      </div>
    </>
  )
}

export default App
