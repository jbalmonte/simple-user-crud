from typing import List
from fastapi import FastAPI, Depends
import models
from services import get_all, get_one, create, update, destroy
from sqlalchemy.orm import Session
from database import engine, get_db
from models import User
from schemas import UserSchema, UserViewSchema
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

models.Base.metadata.create_all(engine)


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get('/api/users', response_model=List[UserViewSchema])
def get_users(db: Session = Depends(get_db)):
    return get_all(db)


@app.get('/api/users/{id}', response_model=UserViewSchema)
def get_user(id: int, db: Session = Depends(get_db)):
    return get_one(id, db)


@app.post('/api/users', status_code=201)
def add_user(request: UserSchema, db: Session = Depends(get_db)):
    return create(request, db)


@app.put('/api/users/{id}')
def add_user(id: int, request: UserSchema, db: Session = Depends(get_db)):
    return update(id, request, db)


@app.delete('/api/users/{id}')
def delete_user(id: int, db: Session = Depends(get_db)):
    return destroy(id, db)
