import React from 'react';
import closeIcon from "../assets/close-button.png";
import NotificationItem from './NotificationItem';
import './Notifications.css';

export default function Notifications({ notificationsArray }) {
  return (
    <div className="notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          {notificationsArray.map(notification => {
            return (
              <NotificationItem id={notification.id} type={notification.type} html={notification.html} value={notification.value} />
            )
          })}
        </ul>
      </div>
      <button aria-label="Close" onClick={() => { console.log("Close button has been clicked") }} style={{ marginLeft: "auto", backgroundColor: "white", border: "none", height: "25px" }}>
        <img alt="Close Button" src={closeIcon}></img>
      </button>

    </div>
  )
}
