## **CipherStudio – Browser-Based React IDE**

### Project Overview
CipherStudio is a browser-based React IDE that allows users to create, edit, and preview React projects directly in the browser. It simulates a real online development environment similar to CodeSandbox, enabling users to write and run React code instantly without external setup.

----

### Objective
The main objective of CipherStudio is to provide a simplified and interactive browser environment where users can:
- Create and manage multiple files and folders for a React project.  
- Write React code using a rich browser-based editor.  
- Run and preview code output live inside the browser.  
- Save and reload projects for future use.

---

### Core Features
- **File Management:** Create, delete, and organize project files.  
- **Code Editor:** Integrated Monaco or Sandpack editor for React code editing with syntax highlighting.  
- **Live Preview:** Real-time rendering of React code as the user types.  
- **Save & Load Projects:** Projects stored in localStorage and loaded through a unique project ID.  
- **UI/UX:** Clean and minimal user interface for smooth usability.

---

### Bonus Features 
- Dark and Light Theme toggle.  
- File rename option.  
- Autosave toggle feature.  
- Responsive layout for both desktop and tablet.  
- Basic authentication module (optional).  

---

### Tech Stack
| Layer | Technology |
|-------|-------------|
| Frontend | React.js |
| Editor | Monaco Editor / Sandpack |
| Live Preview | Sandpack React |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Storage | LocalStorage / AWS S3 |
| Deployment | Vercel (Frontend), Render/Railway (Backend) |

---

### Project Structure
```
CipherStudio/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileExplorer.jsx
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── Preview.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── utils/
│   │   │   └── localStorageUtils.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│
├── backend/
│   ├── models/
│   │   └── Project.js
│   ├── routes/
│   │   └── projectRoutes.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

### Working Explanation
1. The user creates multiple files or folders inside the IDE.  
2. The Monaco or Sandpack editor allows editing of React components.  
3. The live preview window executes and renders the code in real time.  
4. The project can be saved locally or through the backend in MongoDB.  
5. On reloading, files are fetched and restored automatically.  

---

### API Structure
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/projects` | POST | Save a new project |
| `/api/projects/:id` | GET | Load saved project |
| `/api/projects/:id` | PUT | Update existing project |

---

### Installation and Setup
**Frontend**
```
cd frontend
npm install
npm run dev
```

Backend
```
cd backend
npm install
npm start
```

Environment Variables
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### Architecture
```
Frontend (React + Sandpack)
    ↕
Backend (Node + Express)
    ↕
Database (MongoDB Atlas)
```

The frontend manages the user interface and live code rendering, the backend handles project persistence, and MongoDB stores project data and file structures.

---

### Design Highlights**
- Sandpack provides in-browser React execution.  
- Monaco Editor delivers a VS Code-like experience.  
- LocalStorage ensures quick save and load operations.  
- Express.js backend offers scalable API integration.

---

### Assessment Alignment**
| Category | Weight | Status |
|-----------|---------|--------|
| Core functionality | 35% | Completed |
| Code structure & readability | 15% | Completed |
| CSS (vanilla) | 20% | Completed |
| UI/UX clarity | 10% | Completed |
| Creativity & extra features | 10% | Completed |
| Documentation & demo | 10% | Completed |

---

### Author
Name:Anusha Sharma  
Role:B.Tech CSE Student  
Institution: Lovely Professional University  
Project Title: CipherStudio – Browser-Based React IDE  
Duration: 3 Days  
Date: 28 October 2025  
