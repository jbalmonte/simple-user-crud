from sqlalchemy.orm import Session
from models import User
from schemas import UserSchema


def get_all(db: Session):
    return db.query(User).all()


def get_one(id: int, db: Session):
    user = db.query(User).filter(User.id == id).first()
    if not user:
        raise HTTPException(
            status_code=404, detail=f"User with the id {id} is not available")
    return user


def create(request: UserSchema, db: Session):
    user = User(
        name=request.name,
        age=request.age,
        gender=request.gender,
        contact_number=request.contact_number,
        email=request.email,
        address=request.address,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return {'message': 'User addedd successfully'}


def update(id: int, request: UserSchema, db: Session):
    print('UPDATE:', request)
    user = db.query(User).filter(User.id == id)
    if not user.first():
        raise HTTPException(
            status_code=404, detail=f"User with id {id} not found")

    user.update(request.dict())
    db.commit()
    return {'message': 'User updated successfully'}


def destroy(id: int, db: Session):
    user = db.query(User).filter(User.id == id)
    if not user.first():
        raise HTTPException(404, detail='User not found')
    user.delete(synchronize_session=False)
    db.commit()
    return {'message': 'User deleted successfully'}
