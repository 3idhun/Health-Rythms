 🚀 Frontend Project

This is a **React.js (with Vite)** based frontend project. The app is styled with **TailwindCSS** and follows a modular component-based architecture.

---

## 📂 Project Structure

frontend/
│── src/
│ ├── assets/ # Images, icons, and static assets
│ ├── components/ # Reusable React components
│ ├── App.css # App-level styles
│ ├── App.jsx # Root React component
│ ├── index.css # Global styles (Tailwind entry)
│ ├── main.jsx # React entry point
│
│── .gitignore # Git ignored files
│── README.md # Project documentation
│── eslint.config.js # ESLint configuration
│── index.html # HTML entry point (Vite)
│── package.json # Project metadata and dependencies
│── package-lock.json # Dependency lock file
│── vite.config.js # Vite configuration

yaml
Copy code

---

## 🛠️ Tech Stack

- **React.js 19** – UI library  
- **Vite** – Fast build tool  
- **TailwindCSS** – Utility-first CSS framework  
- **ESLint** – Code linting and best practices  

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd frontend
   npm install
   npm install tailwindcss @tailwindcss/vite // Also add tailwinndcss() in vite.config and import tailwindcss from '@tailwindcss/vite'
   @import "tailwindcss";  // Add this in main css file
   npm run dev
