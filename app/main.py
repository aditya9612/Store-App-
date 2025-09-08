from fastapi import FastAPI
from app.database.base import Base
from app.database.session import engine
from app.routers import customers, stores

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Store Management API")

# Routers
app.include_router(customers.router)
app.include_router(stores.router)
