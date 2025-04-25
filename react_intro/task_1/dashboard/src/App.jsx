import './App.css'
import HolbertonLogo from "./assets/holberton-logo.jpg"
import Notifications from './Notifications'
import { getCurrentYear, getFooterCopy } from './utils'

function App() {

  return (
    <>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className='App-header' >
        <img alt="holberton logo" src={HolbertonLogo} />
        <h1>School Dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy()}</p>
      </div>
    </>
  )
}

export default App
