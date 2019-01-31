from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

ma = Marshmallow()
db = SQLAlchemy()

class Asset(db.Model):
    __tablename__ = "assets"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    url = db.Column(db.String(1000), nullable=False)
    created = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __int__(self, url):
        self.url = url

class AssetSchema(ma.Schema):
    id = fields.Integer()
    url = fields.String(required=True)
    created = fields.DateTime()

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(20), nullable=False)
    avatar = db.Column(db.String(150), nullable=False)
    created = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __int__(self, name, email, password, avatar):
        self.name = name
        self.email = email
        self.password = password
        self.avatar = avatar

class UserSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    email = fields.String(required=True)
    password = fields.String(required=True)
    avatar = fields.String(required=True)
    created = fields.DateTime()

class Tag(db.Model):
    __tablename__ = "tags"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    latitude = db.Column(db.Numeric(17,14), nullable=False)
    longitude = db.Column(db.Numeric(17,14), nullable=False)
    title = db.Column(db.String(150), nullable=False)
    artist = db.Column(db.String(100), nullable=True)
    description = db.Column(db.String(1000), nullable=True)
    primary_image = db.Column(db.String(550), nullable=True)
    created = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __init__(self, latitude, longitude, title, artist, description, primary_image):
        self.latitude = latitude
        self.longitude = longitude
        self.title = title
        self.artist = artist
        self.description = description
        self.primary_image = primary_image

class TagSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    latitude = fields.Float(required=True)
    longitude = fields.Float(required=True)
    title = fields.String(required=True, validate=validate.Length(1))
    artist = fields.String(required=False)
    description = fields.String(required=False)
    primary_image = fields.String(required=False)
    created = fields.DateTime()
