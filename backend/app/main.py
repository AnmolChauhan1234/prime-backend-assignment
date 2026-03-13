from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from .routes import auth_routes, task_routes, market_routes

Base.metadata.create_all(bind=engine)

app = FastAPI(title="PrimeTrade Backend Assignment")

# Allow frontend to access backend
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router, prefix="/api/v1/auth", tags=["Auth"])
app.include_router(task_routes.router, prefix="/api/v1", tags=["Tasks"])
app.include_router(market_routes.router, prefix="/api/v1", tags=["Market"])