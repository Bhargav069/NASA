🌍 Climate Detection & Weather Visualization App

A modern web application developed for the NASA Space Apps Challenge 2023, designed to make weather and climate information more interactive and accessible.

The application combines real-time weather data, an interactive globe, and a modern React-based interface to allow users to explore weather conditions across different locations. The interactive globe acts as a visual location search interface, providing a more engaging alternative to traditional text-based search.

⸻

✨ Features

* 🌍 Interactive 3D Globe for exploring different locations
* 🔎 Globe-based location search for selecting geographic locations
* 🌤️ Real-time weather information through Weather API integration
* 📍 Location-based weather data
* 📊 Dynamic weather information and insights
* 🗺️ Interactive geographic visualization
* ⚡ Real-time API data fetching
* 🎨 Modern responsive UI
* 📱 Responsive design for different screen sizes
* 🧩 Component-based React architecture
* 🚀 Fast development and build process using Vite

⸻

🛠️ Tech Stack

Frontend

* React.js – Component-based user interface
* Vite – Frontend development and build tool
* JavaScript / JSX – Application logic
* Tailwind CSS – Utility-first styling
* PostCSS – CSS processing and transformation

APIs & Data

* Weather API – Real-time weather information
* Location-based data
* REST API integration

Development Tools

* npm – Package management
* Git – Version control
* GitHub – Source code management
* VS Code – Development environment

⸻

🏗️ Application Architecture

The application follows a modern React-based frontend architecture.

                         ┌──────────────────────┐
                         │       User           │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Interactive Globe  │
                         │  Location Selection  │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React Application  │
                         │ Components & State   │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     Weather API      │
                         │  Real-time Data      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ Data Processing      │
                         │ & Transformation     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ Weather Information  │
                         │   & Visualization    │
                         └──────────────────────┘

⸻

🌎 Interactive Globe

One of the core ideas of the project is using an interactive globe as a location discovery and search interface.

Instead of relying only on a conventional search field, users can interact with the globe to explore different parts of the world and select a location.

The selected location is then used to retrieve relevant weather information.

This creates a more visual and intuitive experience for exploring geographic weather data.

⸻

🌤️ Weather API Integration

The application integrates a Weather API to retrieve real-time weather information.

The general flow is:

Location Selected
       ↓
Location Data Retrieved
       ↓
Weather API Request
       ↓
Weather Data Received
       ↓
React State Updated
       ↓
Weather Information Displayed

This allows the application to dynamically update weather information based on the location selected by the user.

⸻

⚛️ React Architecture

The project uses React’s component-based architecture to separate the interface into reusable and maintainable components.

React is responsible for:

* Managing UI state
* Rendering dynamic weather information
* Handling user interactions
* Updating the interface when API data changes
* Organizing the application into reusable components

The application uses React’s modern development patterns to handle dynamic data and user interaction.

⸻

🎨 Styling

The interface is styled using Tailwind CSS.

Tailwind provides a utility-first approach that allows the application to create:

* Responsive layouts
* Interactive components
* Consistent spacing
* Typography
* Cards and information panels
* Modern UI elements
* Responsive designs for different screen sizes

PostCSS is used as part of the CSS processing pipeline.

⸻

⚡ Why Vite?

The project uses Vite as its development and build tool.

Vite provides:

* Fast development server startup
* Fast Hot Module Replacement (HMR)
* Modern JavaScript tooling
* Optimized production builds
* Simple React project configuration

⸻

🔄 Application Workflow

┌─────────────────────┐
│       User          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Explore Interactive │
│       Globe         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Select / Search     │
│      Location       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Weather API Call  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Process API Data    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Update React State  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Display Weather &   │
│ Climate Information │
└─────────────────────┘

⸻

🚀 Getting Started

Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

You can verify your installation with:

node --version
npm --version

⸻

1. Clone the Repository

git clone https://github.com/Bhargav069/NASA.git

⸻

2. Navigate to the Project

cd NASA

⸻

3. Install Dependencies

npm install

⸻

4. Configure Environment Variables

If the Weather API requires an API key, create a .env file in the project root.

Example:

VITE_WEATHER_API_KEY=your_api_key

Replace the placeholder with your actual API key.

Important: Never commit API keys or other sensitive credentials to GitHub.

⸻

5. Start the Development Server

npm run dev

Vite will start the development server and provide a local URL, typically:

http://localhost:5173

Open the URL in your browser.

⸻

📁 Project Structure

NASA/
│
├── public/
│   └── Static assets
│
├── src/
│   ├── components/
│   │   └── React components
│   │
│   ├── assets/
│   │   └── Images and other assets
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md

⸻

🎯 Project Objectives

The project was developed with the following objectives:

* Make weather information easier to explore
* Create an interactive geographic experience
* Use a globe as an intuitive location search mechanism
* Integrate real-time weather information
* Demonstrate modern frontend development
* Combine API-driven data with interactive visualization
* Create an engaging prototype for the NASA Space Apps Challenge

⸻

🏆 NASA Space Apps Challenge 2023

This project was developed as part of the NASA Space Apps Challenge 2023.

The challenge brings together developers, designers, scientists, students, and innovators to create solutions using NASA’s open data and related technologies.

Working on the project involved:

* Identifying a real-world problem
* Designing an interactive solution
* Working collaboratively within a limited timeframe
* Integrating external APIs
* Developing and testing a working prototype
* Presenting the solution

⸻

📚 What I Learned

This project provided practical experience with:

* React.js
* Vite
* Tailwind CSS
* PostCSS
* JavaScript / JSX
* REST API integration
* Asynchronous data fetching
* React state management
* Interactive globe interfaces
* Location-based data
* Dynamic UI rendering
* Responsive web development
* Git and GitHub
* Rapid prototyping
* Team-based development

⸻

🔮 Future Improvements

Potential improvements include:

* 🌡️ Detailed climate analytics
* 📈 Historical weather and climate trends
* 🌦️ Multi-day weather forecasts
* 🌍 More advanced globe interactions
* 📍 Automatic user-location detection
* 🔔 Weather alerts
* 📊 Interactive climate trend charts
* 🤖 AI-powered weather and climate insights
* 🌐 Integration with additional environmental datasets
* 📱 Progressive Web App support

⸻

👨‍💻 Author

Bhargav Thupalli

Computer Science & Engineering
Dayananda Sagar University

* 🌐 Portfolio: https://bhargav0699.github.io/
* 🐙 GitHub: https://github.com/Bhargav069
* 💼 LinkedIn: https://linkedin.com/in/bhargav-thupalli-79951b27

⸻

⭐ Project

Developed as part of the NASA Space Apps Challenge 2023.

If you find this project interesting, consider giving the repository a ⭐ on GitHub.
