import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.upper}></div>
            <div className={styles.lower}>
                <h1 className={styles.title}>Welcome to PopX</h1>
                <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button 
                    className={`${styles.btn} ${styles.primaryBtn}`}
                    onClick={() => navigate('/signup')}
                >
                    Create Account
                </button>
                <button 
                    className={`${styles.btn} ${styles.secondaryBtn}`}
                    onClick={() => navigate('/login')}
                >
                    Already Registered? Login
                </button>
            </div>
            
        </div>
    );
};

export default LandingPage;