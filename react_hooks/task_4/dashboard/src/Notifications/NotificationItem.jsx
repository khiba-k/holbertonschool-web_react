import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
    liClass: {
        '@media (max-width: 900px)': {
            width: '100%',
            borderBottom: '1px solid black',
            fontSize: '20px',
            padding: '10p 8px',
        },
    },
});

const NotificationItem = React.memo(function NotificationItem({ id, type, value, html, markAsRead }) {
    const styleClass = type === 'default' ? styles.default : styles.urgent;

    const handleClick = () => {
        markAsRead(id);
    };

    if (value) {
        return (
            <li
                className={css(styleClass, styles.liClass)}
                data-notification-type={type}
                onClick={handleClick}
                data-testid={`item${id}`}
            >
                {value}
            </li>
        );
    } else if (html) {
        return (
            <li
                className={css(styleClass, styles.liClass)}
                data-notification-type={type}
                dangerouslySetInnerHTML={{ __html: html }}
                onClick={handleClick}
                data-testid={`item${id}`}
            />
        );
    }

    return null;
});

export default NotificationItem;
