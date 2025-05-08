import React from 'react';

const NotificationItem = ({ id, type, html, value }) => {
    if (value) {
        return (
            <li key={id} data-notification-type={type}>
                {value}
            </li>
        );
    } else if (html) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    }
    return null;
};

export default NotificationItem
