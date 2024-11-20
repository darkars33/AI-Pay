# AI Pay
Video Drive Link - https://drive.google.com/file/d/1JLljeHZtr5g4mb4Zl9FKwjITclS2ikZv/view?usp=drive_link
AI Pay is a mobile application designed to empower users with AI-driven financial insights and personalized investment recommendations. Built using React Native and leveraging various AI and NLP tools, AI Pay aims to simplify financial management for users.

## Features

- **Voice Recognition:** Converts spoken words into text for seamless interaction.
- **Transaction Analysis:** Provides insights into spending patterns and investment opportunities using the Gemini API.
- **QR Code Scanner:** Easily scan and manage transactions with a built-in QR code scanner.
- **User Authentication:** Secure login and user management using Redux.

## Tech Stack

- **Frontend:** React Native
- **Backend:** Node.js/Express, Appwrite
- **Database:** MongoDB
- **NLP/AI Tools:** Gemini API, Dialogflow, Google Cloud Speech API
- **Real-Time Data:** Alpha Vantage

## Setup Process

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI
- MongoDB (or a MongoDB Atlas account)
- Appwrite server

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-pay.git
cd ai-pay

### 2. Install Dependencies

```bash
npm install

### 3. Set Up the Environment

MONGODB_URI=your_mongodb_uri
APPWRITE_ENDPOINT=your_appwrite_endpoint
APPWRITE_PROJECT=your_appwrite_project_id
GEMINI_API_KEY=your_gemini_api_key


### 4. Start the Development Server

npm start

