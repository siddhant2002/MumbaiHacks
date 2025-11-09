# FaceBank - AI Banking Assistant

FaceBank is a first-of-its-kind Agentic AI banking assistant created to serve the digital banking needs of elderly and differently abled citizens. With the fusion of real-time facial recognition, proactive multi-agent systems, and conversational AI systems, users can execute banking functions, check their balance, and manage fixed deposits using just their voice.

## Features

- **Multi-Agent System**
  - **Auth Agent**: Secure customer verification using facial recognition
  - **Transaction Agent**: Voice-controlled payments and balance checks
  - **Advisory Agent**: Personalized financial advice and recommendations
  - **Learning Agent**: Predictive assistance and guidance

- **User Interface**
  - Balance display with show/hide functionality
  - Bill payment options (Gas, DTH, Electricity, etc.)
  - Profile management
  - Settings customization
  - AI Chatbot assistance

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/)

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/siddhant2002/MumbaiHacks.git
   cd MumbaiHacks
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
MumbaiHacks/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatBot/
│   │   ├── Header/
│   │   ├── ProfileModal/
│   │   └── SettingsModal/
│   ├── pages/
│   │   └── Dashboard/
│   ├── services/
│   ├── assets/
│   ├── App.js
│   └── index.js
└── package.json
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects the create-react-app configuration

## Features Usage

1. **Balance View**
   - Click the eye icon to show/hide your balance
   - Toggle visibility for privacy

2. **Bill Payments**
   - Select from various bill payment options
   - Each option has a unique icon and color

3. **Profile Management**
   - Click the profile icon in the header
   - View and manage personal information

4. **Settings**
   - Access settings through the gear icon
   - Customize app preferences

5. **AI Chatbot**
   - Click the chat button in bottom-right corner
   - Interact with different AI agents for specific tasks
   - Get help with banking operations

## Future Enhancements

- Integration with facial recognition system
- Voice command functionality
- Multiple language support
- Enhanced security features
- Mobile application development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.