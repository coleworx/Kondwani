# Kondwani - Risk Management System

A comprehensive application to identify, assess, and mitigate project risks.

## Overview

Kondwani is a risk management platform designed to help teams:
- **Identify** potential project risks early
- **Assess** the impact and probability of risks
- **Mitigate** risks through strategic planning

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB
- JWT Authentication

### Frontend
- React 18
- Vite
- React Router
- Zustand (State Management)

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/coleworx/Kondwani.git
cd Kondwani

# Install dependencies
npm install

# Setup environment variables
cp apps/backend/.env.example apps/backend/.env
# Edit .env with your configuration
```

### Running the Application

```bash
# Development mode (runs both frontend and backend)
npm run dev

# Backend only
npm run dev --workspace=apps/backend

# Frontend only
npm run dev --workspace=apps/frontend

# Build for production
npm run build
```

## Project Structure

```
apps/
├── backend/        # Express API server
└── frontend/       # React application
docs/              # Documentation
```

## Documentation

- [API Documentation](./docs/API.md)
- [Architecture](./docs/ARCHITECTURE.md)

## Features

- [ ] User Authentication
- [ ] Risk Dashboard
- [ ] Create & Manage Risks
- [ ] Risk Assessment Metrics
- [ ] Mitigation Planning
- [ ] Risk Reports
- [ ] Team Collaboration
- [ ] Audit Logs

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

Cole Worx (@coleworx)
