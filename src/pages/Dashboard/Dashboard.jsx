import React, { useState, useEffect } from 'react';
import { FaGasPump, FaTv, FaBolt, FaMobile, FaWater, FaWifi, FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './Dashboard.module.css';
import { ChatBot } from '../../components/ChatBot/ChatBot';

export const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const [showBalance, setShowBalance] = useState(false);

  const billOptions = [
    { icon: <FaGasPump />, name: 'Gas Bill', color: '#FF6B6B' },
    { icon: <FaTv />, name: 'DTH Bill', color: '#4ECDC4' },
    { icon: <FaBolt />, name: 'Electricity', color: '#FFD93D' },
    { icon: <FaMobile />, name: 'Mobile', color: '#6C5CE7' },
    { icon: <FaWater />, name: 'Water Bill', color: '#45B7D1' },
    { icon: <FaWifi />, name: 'Internet', color: '#A8E6CF' }
  ];

  useEffect(() => {
    // This will be replaced with actual API call when backend is integrated
    const fetchBalance = async () => {
      try {
        // Simulated API call
        const response = await fetch('http://your-flask-backend/api/balance');
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
        // Using dummy data for now
        setBalance(50000.00);
      }
    };

    fetchBalance();
  }, []);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.balanceCard}>
          <h2>Your Balance</h2>
          <div className={styles.balanceContainer}>
            <div className={styles.balanceAmount}>
              {showBalance 
                ? `₹${balance?.toLocaleString() ?? '---'}`
                : '₹' + '*'.repeat(8)}
            </div>
            <button 
              className={styles.toggleBalance} 
              onClick={() => setShowBalance(!showBalance)}
              title={showBalance ? "Hide Balance" : "Show Balance"}
            >
              {showBalance ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        
        <div className={styles.billOptionsContainer}>
          <h2>Pay Bills</h2>
          <div className={styles.billOptionsGrid}>
            {billOptions.map((option, index) => (
              <button key={index} className={styles.billOption} style={{ '--accent-color': option.color }}>
                <div className={styles.billOptionIcon}>
                  {option.icon}
                </div>
                <span className={styles.billOptionName}>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <ChatBot />
    </>
  );
};