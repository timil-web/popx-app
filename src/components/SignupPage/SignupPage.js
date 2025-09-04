import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignupPage.module.css';

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: 'No'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'radio') {
            setFormData({ ...formData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/profile');
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Create your PopX account</h1>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    <label htmlFor="fullName">Full Name</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    <label htmlFor="phone">Phone number</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label htmlFor="password">Password</label>
                </div>
                <div className={styles.inputGroup}>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
                    <label htmlFor="company">Company name</label>
                </div>
                
                <div className={styles.radioGroup}>
                    <p>Are you an Agency?</p>
                    <div>
                        <input type="radio" id="yes" name="isAgency" value="Yes" checked={formData.isAgency === 'Yes'} onChange={handleChange} />
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="isAgency" value="No" checked={formData.isAgency === 'No'} onChange={handleChange} />
                        <label htmlFor="no">No</label>
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn}>Create Account</button>
            </form>
        </div>
    );
};

export default SignupPage;