import React, { useEffect, useState } from 'react';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>; // Or redirect to login
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Account Settings</h2>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.profilePicContainer}>
                    <img src="../image.png" alt="Profile" className={styles.profilePic} />
                </div>
                <div className={styles.profileDetails}>
                    <p className={styles.name}>{user.fullName}</p>
                    <p className={styles.email}>{user.email}</p>
                </div>
            </div>
            <div className={styles.lorem}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>
    );
};

export default ProfilePage;