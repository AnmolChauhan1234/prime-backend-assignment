# PrimeTrade Backend Assignment

**Scalable REST API with Authentication, Role-Based Access & React
Frontend**

This project implements a secure and scalable backend system using
FastAPI and a simple React frontend to demonstrate API usage.

## Tech Stack

### Backend

-   FastAPI
-   Python 3.13
-   SQLAlchemy
-   SQLite
-   JWT Authentication
-   Passlib (bcrypt hashing)
-   Pydantic Validation
-   Uvicorn

### Frontend

-   React (Vite)
-   Axios
-   React Router

------------------------------------------------------------------------

## Features

### Authentication

-   User registration
-   Secure password hashing
-   JWT-based login

### Task Management

-   Create tasks
-   View tasks
-   Delete tasks

### External API

-   Crypto price using CoinGecko API

------------------------------------------------------------------------

## Backend Setup

Clone repository

    git clone https://github.com/AnmolChauhan1234/prime-backend-assignment.git
    cd prime-backend-assignment/backend

Create virtual environment

    python3 -m venv .venv
    source .venv/bin/activate

Install dependencies

    pip install -r requirements.txt

Run backend server

    uvicorn app.main:app --reload

Backend runs at

    http://127.0.0.1:8000

Swagger documentation

    http://127.0.0.1:8000/docs

------------------------------------------------------------------------

## Frontend Setup

Go to frontend folder

    cd ../frontend

Install dependencies

    npm install

Run frontend

    npm run dev

Frontend runs at

    http://localhost:5173

------------------------------------------------------------------------

## API Endpoints

### Authentication

POST /api/v1/auth/register\
POST /api/v1/auth/login

### Tasks

GET /api/v1/tasks\
POST /api/v1/tasks\
DELETE /api/v1/tasks/{task_id}

### External API

GET /api/v1/crypto-price

------------------------------------------------------------------------

## Example Request

POST /api/v1/auth/register

{ "email": "test@gmail.com", "password": "123456" }

------------------------------------------------------------------------

## Security

-   Password hashing with bcrypt
-   JWT token authentication
-   Input validation using Pydantic
-   CORS protection

------------------------------------------------------------------------

## Scalability Improvements

-   PostgreSQL database
-   Redis caching
-   Docker deployment
-   Load balancing
-   Microservices architecture

------------------------------------------------------------------------

## Author

Anmol Chauhan\
B.Tech CSE -- Noida Institute of Engineering and Technology
