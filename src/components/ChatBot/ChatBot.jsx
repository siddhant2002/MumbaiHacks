import React, { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import styles from './ChatBot.module.css';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I am your FaceBank AI Assistant. How can I help you today?',
      agent: 'Assistant'
    }
  ]);
  const [input, setInput] = useState('');

  const agents = {
    'Auth': 'Handles account verification and security',
    'Transaction': 'Manages payments and transfers',
    'Advisory': 'Provides financial advice',
    'Learning': 'Helps with app navigation and features'
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'user', content: input };
    
    // Simulate bot response
    const getBotResponse = (message) => {
      if (message.toLowerCase().includes('balance')) {
        return { type: 'bot', content: 'I can help you check your balance. Would you like me to show it?', agent: 'Transaction' };
      } else if (message.toLowerCase().includes('transfer') || message.toLowerCase().includes('payment')) {
        return { type: 'bot', content: 'I can assist you with making a transfer. Please provide the recipient details.', agent: 'Transaction' };
      } else if (message.toLowerCase().includes('verify') || message.toLowerCase().includes('security')) {
        return { type: 'bot', content: 'I can help you with account verification. Would you like to use facial recognition?', agent: 'Auth' };
      } else if (message.toLowerCase().includes('advice') || message.toLowerCase().includes('invest')) {
        return { type: 'bot', content: 'Based on your profile, I can provide personalized financial advice.', agent: 'Advisory' };
      } else {
        return { type: 'bot', content: 'I understand you need help. Could you please specify what banking service you\'re looking for?', agent: 'Assistant' };
      }
    };

    const botResponse = getBotResponse(input);

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div className={styles.chatbotContainer}>
      {!isOpen && (
        <button className={styles.chatButton} onClick={() => setIsOpen(true)}>
          <FaRobot />
          <span>Chat with AI Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <FaRobot className={styles.botIcon} />
              <div>
                <h3>FaceBank AI Assistant</h3>
                <p>Multi-Agent Support</p>
              </div>
            </div>
            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${message.type === 'user' ? styles.userMessage : styles.botMessage}`}
              >
                {message.type === 'bot' && (
                  <div className={styles.agentLabel}>
                    {message.agent} Agent
                  </div>
                )}
                <div className={styles.messageContent}>
                  {message.type === 'user' ? <FaUser className={styles.userIcon} /> : <FaRobot className={styles.botIcon} />}
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form className={styles.chatInput} onSubmit={handleSendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};