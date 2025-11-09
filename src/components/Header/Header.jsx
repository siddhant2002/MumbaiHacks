import React, { useState } from 'react';
import { FaUser, FaCog } from 'react-icons/fa';
import styles from './Header.module.css';
import { ProfileModal } from '../ProfileModal/ProfileModal';
import { SettingsModal } from '../SettingsModal/SettingsModal';

export const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>FaceBank</div>
        <div className={styles.controls}>
          <button 
            className={styles.iconButton}
            onClick={() => setIsProfileOpen(true)}
          >
            <FaUser size={20} />
          </button>
          <button 
            className={styles.iconButton}
            onClick={() => setIsSettingsOpen(true)}
          >
            <FaCog size={20} />
          </button>
        </div>
      </header>

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
};