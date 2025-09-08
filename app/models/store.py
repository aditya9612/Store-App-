# app/models/store.py
from sqlalchemy import Column, Integer, String
from app.database.base import Base

class Store(Base):
    __tablename__ = "stores"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    address = Column(String(255))
    owner = Column(String(100))
