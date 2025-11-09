import React from 'react';
import styles from './SettingsModal.module.css';
import { FaBell, FaShieldAlt, FaLanguage, FaMoon, FaQuestionCircle } from 'react-icons/fa';

export const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const settingsOptions = [
    { icon: <FaBell />, title: 'Notifications', description: 'Manage your notification preferences' },
    { icon: <FaShieldAlt />, title: 'Security', description: 'Configure security settings and passwords' },
    { icon: <FaLanguage />, title: 'Language', description: 'Change your preferred language' },
    { icon: <FaMoon />, title: 'Display', description: 'Adjust display settings and theme' },
    { icon: <FaQuestionCircle />, title: 'Help & Support', description: 'Get help and contact support' }
  ];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2 className={styles.settingsHeader}>Settings</h2>
        
        <div className={styles.settingsList}>
          {settingsOptions.map((option, index) => (
            <button key={index} className={styles.settingItem}>
              <div className={styles.settingIcon}>
                {option.icon}
              </div>
              <div className={styles.settingInfo}>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};