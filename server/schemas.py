from pydantic import BaseModel
from enums import Gender


class UserSchema(BaseModel):
    name: str
    age: int
    gender: Gender
    email: str
    contact_number: str
    address: str

    class Config:
        orm_mode = True
        use_enum_values = True


class UserViewSchema(UserSchema):
    id: int

    class Config:
        orm_mode = True
        use_enum_values = True
