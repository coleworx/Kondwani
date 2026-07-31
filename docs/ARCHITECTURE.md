# Architecture Overview

## Project Structure

```
kondwani/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── index.js
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── controllers/
│   │   │   └── middleware/
│   │   └── package.json
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── stores/
│       │   └── App.jsx
│       └── package.json
├── docs/
├── package.json
└── README.md
```

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Validation**: express-validator

### Frontend
- **Library**: React 18
- **Build Tool**: Vite
- **Router**: React Router v6
- **State Management**: Zustand
- **HTTP Client**: Axios

## Data Flow

1. **Frontend** sends requests to the backend API
2. **Backend** validates and processes requests
3. **Database** stores risk data
4. **API** returns responses to frontend
5. **Frontend** updates UI based on responses

## Key Features

- Risk Identification
- Risk Assessment
- Risk Mitigation Planning
- User Authentication
- Risk Dashboard
- Reporting & Analytics
