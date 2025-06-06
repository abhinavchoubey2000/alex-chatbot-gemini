# Alex - AI Freelancing Guide 🤖

Alex is a modern AI chatbot powered by Google's Gemini Pro, built with Vite, React, and TypeScript. It's your personal guide for freelancing careers, specifically focused on Full Stack Web Development, Video Editing, and Designing.

![React Version](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **AI-Powered Career Guidance**: Get expert advice in:
  - 💻 Full Stack Web Development
  - 🎬 Video Editing
  - 🎨 Designing

- **Beautiful Themes**: Switch between 4 carefully crafted themes:
  - `🖤 Black`: Modern dark theme (Default)
  - `🔴 Dracula Red`: Dark theme with vibrant red accents
  - `🌿 Leaf Green`: Nature-inspired theme with green highlights
  - `🌊 Sky Blue`: Calming blue theme with light accents

- **Modern UI Components**:
  - Responsive Chakra UI components
  - Chat animations with Chakra UI Transition
  - Markdowns rendering for AI responses
  - Clean and intuitive chat interface

## 🛠️ Tech Stack

- **Core**:
  - React 19.1.0 (Latest)
  - TypeScript 5.8.3
  - Vite 6.3.5
  - Node 20.11.1 (Backend)
  - Express 5.1.0 (Backend)
  - Cors 2.8.5 (Backend)

- **UI/UX**:
  - Chakra UI 3.19.2
  - Lucide React 0.511.0
  - Chakra UI Transition 2.1.0

- **API Integration**:
  - Axios with retry support
  - Google Gemini Pro API

## 🚀 Getting Started

### Prerequisites

1. Node.js 18.0.0 or higher
2. npm or yarn
3. Google Gemini API key ([Get it here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```powershell/cmd
   git clone https://github.com/abhinavchoubey2000/alex-chatbot-gemini.git
   cd alex-chatbot-gemini
   ```

2. **Install dependencies for frontend**
   ```powershell/cmd
   npm install
   # or
   yarn
   ```

3. **Install dependencies for backend**
   ```powershell/cmd
   cd backend
   npm install
   # or
   yarn
   ```

4. **Set up environment variables for frontend**
   - Create a `.env` file in the root directory
   - Add your Backend url:
   ```env
   Backend_URL=your_backend_url_here   # Get this from express server
   ```

5. **Set up environment variables for backend**
   - Create a `.env` file in the ./backend directory
   - Add your port number and gemini api key:
   ```env
   PORT=your_port_number_here   # The port you have selected
   GEMINI_API_KEY=your_gemini_api_key_here  # Get this from google AI studio
   ```

6. **Start development server of frontend**
   ```powershell/cmd
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173`

7. **Start development server of backend**
   ```powershell/cmd
   cd /backend
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:<port_number_you_have_given_in_.env_file>`



### How to Switch Themes

Use the theme selector in the top navigation bar to switch between:
- Black (Default dark theme)
- Dracula Red
- Leaf Green
- Sky Blue

## 💬 Chat Features

- Real-time conversation with Gemini AI
- Smart context management
- Markdown support for:
  - Code blocks with syntax highlighting
  - Lists and tables
  - Links and images
- Message history
- Loading states and error handling

## 🔧 Development

- Uses Vite for blazing fast development
- ESLint and TypeScript for code quality
- Hot Module Replacement (HMR)
- Built-in development server at `localhost:5173`

### Project Structure
```
alex-chatbot-gemini/
├── src/
│   ├── assets/     # Images: logo, overlays
│   ├── components/         # Components: chatbox, prompt-input, header etc 
│   ├── components/ui         # Theme configurations
│   ├── App.tsx
|   ├── index.css    # Stylesheet: Fonts, Scrollbar stylings
|   ├── main.tsx    # The main file    
│   └── types.d.ts      # Types and Interfaces of all the components
├── backend/
│   ├── .env     # Environment variables file for backend
│   └── server.js      # Backend server
├── public/            # favicon
├── .env            # Envrionment variables file for frontend
└── package.json       # Dependencies
```

## 📝 Environment Variables

Required environment variables for production:

```env
Backend_URL=your_url_link    # Required for connection with backend
PORT=your_port_number   # Required to start the server on a particular port number
GEMINI_API_KEY=your_gemini_api_key  # Required to connect with google gemini modal
```

## ⚡ Performance

- Optimized bundle size
- Lazy loading of components
- Efficient theme switching
- Fast development server with HMR
- Production-ready build optimizations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgments

- Google Gemini AI for powering the chatbot
- Chakra UI team for the amazing component library
- React and Vite teams for the excellent development experience
- The open source community for various tools and libraries

---

Made with ❤️ by [Abhinav Choubey](https://github.com/abhinavchoubey2000)

### Need Help?

For any questions or issues, please [open an issue](https://github.com/abhinavchoubey2000/alex-chatbot-gemini/issues) on GitHub.
