# LeadDesk Mini

A mini CRM application built as an internship assignment.

## Tech Stack

### Frontend
- React
- Axios
- React Router

### Backend
- Node.js
- Express.js

### Database
- SQLite

### Authentication
- JWT (JSON Web Token)
- bcrypt

## Features

- Submit a new lead
- Store leads in SQLite
- Admin Login
- JWT Authentication
- View all leads
- Search leads by name/email
- Update lead status
- Protected admin routes

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `server` folder:

```
PORT=5001
JWT_SECRET=your_secret_key
```

## API Endpoints

### Public

POST `/api/leads`

### Protected

GET `/api/leads`

PUT `/api/leads/:id`

POST `/api/auth/login`

## Admin Credentials

Username:

```
admin
```

Password:

```
admin123
```