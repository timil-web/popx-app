import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigate('/profile');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Signin to your PopX account</h1>
                <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <form onSubmit={handleLogin} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="password">Password</label>
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.loginBtn}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;