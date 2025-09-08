from pydantic import BaseModel

class CustomerBase(BaseModel):
    name: str
    email: str
    phone: str | None = None

class CustomerCreate(CustomerBase):
    store_id: int

class CustomerOut(CustomerBase):
    id: int
    store_id: int
    class Config:
        orm_mode = True
