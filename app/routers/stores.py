from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.store import Store
from app.schemas.store import StoreCreate, StoreOut

router = APIRouter(prefix="/stores", tags=["Stores"])


# Create Store
@router.post("/", response_model=StoreOut)
def create_store(store: StoreCreate, db: Session = Depends(get_db)):
    db_store = Store(**store.dict())
    db.add(db_store)
    db.commit()
    db.refresh(db_store)
    return db_store


# Read All Stores
@router.get("/", response_model=list[StoreOut])
def get_stores(db: Session = Depends(get_db)):
    return db.query(Store).all()


# Read Single Store
@router.get("/{store_id}", response_model=StoreOut)
def get_store(store_id: int, db: Session = Depends(get_db)):
    store = db.query(Store).filter(Store.id == store_id).first()
    if not store:
        raise HTTPException(status_code=404, detail="Store not found")
    return store


# Update Store
@router.put("/{store_id}", response_model=StoreOut)
def update_store(store_id: int, store: StoreCreate, db: Session = Depends(get_db)):
    db_store = db.query(Store).filter(Store.id == store_id).first()
    if not db_store:
        raise HTTPException(status_code=404, detail="Store not found")

    for key, value in store.dict().items():
        setattr(db_store, key, value)

    db.commit()
    db.refresh(db_store)
    return db_store


# Delete Store
@router.delete("/{store_id}")
def delete_store(store_id: int, db: Session = Depends(get_db)):
    db_store = db.query(Store).filter(Store.id == store_id).first()
    if not db_store:
        raise HTTPException(status_code=404, detail="Store not found")

    db.delete(db_store)
    db.commit()
    return {"message": f"Store {store_id} deleted successfully"}
