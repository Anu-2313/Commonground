# CommonGround

CommonGround is a collaboration platform that connects doers who need support with investors who fund meaningful projects. The platform includes authentication, role-based dashboards, project and offer management, and messaging between matched users.

## Project Structure
- `backend/` Express + Sequelize API
- `frontend/` React + React Router UI

## Setup Steps
1. Clone the repository.
2. Install backend dependencies: `cd backend && npm install`.
3. Install frontend dependencies: `cd ../frontend && npm install`.
4. Configure environment variables (see below).

## Environment Variables
### Backend
- `PORT` - Port for the API server (default: `5000`).
- `DATABASE_URL` - PostgreSQL connection string.
- `JWT_SECRET` - Secret for signing JWTs.

### Frontend
- `VITE_API_BASE_URL` - Base URL for API requests (default: `http://localhost:5000/api`).

## How to Run Backend
```bash
cd backend
npm run dev
```

## How to Run Frontend
```bash
cd frontend
npm run dev
```

## Basic API Reference
### Auth
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/profile`

### Users
- `GET /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`

### Projects
- `POST /api/projects`
- `GET /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

### Offers
- `POST /api/offers`
- `GET /api/offers`
- `GET /api/offers/:id`
- `PUT /api/offers/:id`

### Chat
- `POST /api/chat`
- `GET /api/chat/:conversationId`
