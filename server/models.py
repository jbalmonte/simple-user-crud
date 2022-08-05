from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import relationship
from database import Base
from enums import Gender


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer())
    gender = Column(Enum(Gender))
    email = Column(String, nullable=False)
    contact_number = Column(String)
    address = Column(String)

    def __repr__(self):
        return "User(name='%s',gender='%s',age='%s',email='%s',contact_number='%s',address='%s')" % \
            (self.name, self.gender, self.age, self.email,
             self.contact_number, self.address)
