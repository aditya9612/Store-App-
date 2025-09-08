from sqlalchemy.orm import Session
from app import models, schemas

def create_customer(db: Session, customer: schemas.customer.CustomerCreate):
    db_customer = models.customer.Customer(**customer.dict())
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)
    return db_customer

def get_customers(db: Session):
    return db.query(models.customer.Customer).all()
