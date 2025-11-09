import React from 'react';
import styles from './ProfileModal.module.css';
import { FaUser, FaEnvelope, FaPhone, FaIdCard } from 'react-icons/fa';

export const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    accountNo: 'XXXX XXXX 4321'
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.profileHeader}>
          <div className={styles.profilePicture}>
            <FaUser size={40} />
          </div>
          <h2>Profile Information</h2>
        </div>
        
        <div className={styles.profileInfo}>
          <div className={styles.infoItem}>
            <FaUser className={styles.infoIcon} />
            <div>
              <label>Name</label>
              <p>{userProfile.name}</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <div>
              <label>Email</label>
              <p>{userProfile.email}</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <FaPhone className={styles.infoIcon} />
            <div>
              <label>Phone</label>
              <p>{userProfile.phone}</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <FaIdCard className={styles.infoIcon} />
            <div>
              <label>Account Number</label>
              <p>{userProfile.accountNo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};