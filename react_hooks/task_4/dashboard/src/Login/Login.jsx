import { StyleSheet, css } from 'aphrodite';
import React, { useState } from 'react';

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        height: '100%',
        padding: '0.5rem',
        flexDirection: 'column',
    },
    loginDiv: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
        }
    },
    btn: {
        '@media (max-width: 900px)': {
            width: '50px',
        }
    }
});

const Login = ({ logIn }) => {

    const [formData, setFormData] = useState({
        email: '', password: ''
    });
    const [enableSubmit, setEnableSubmit] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = (email, password) =>
        email && validateEmail(email) && password && password.length >= 8;

    const validate = (emailValue, passwordValue) => {
        const isValid = validateForm(emailValue, passwordValue);
        if (isValid) {
            setEnableSubmit(true);
            return true;
        }
    };

    const handleChangeEmail = (value) => {
        setFormData(prev => ({
            ...prev,
            email: value
        }));
        validate(value, formData.password);
    }

    const handleChangePassword = (value) => {
        setFormData(prev => ({
            ...prev,
            password: value
        }));
        validate(formData.email, value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        logIn(formData.email, formData.password);
    };

    return (
        <div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.loginDiv)}>
                <form onSubmit={handleLoginSubmit}>
                    <span>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChangeEmail(e.target.value)}
                        />
                    </span>
                    <span>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => handleChangePassword(e.target.value)}
                        />
                    </span>
                    {enableSubmit && (
                        <input
                            data-testid="submitBtn"
                            type="submit"
                            className={css(styles.btn)}
                            value="OK"
                        />
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;