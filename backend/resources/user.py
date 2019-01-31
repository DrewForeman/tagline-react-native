from flask import jsonify, request
from flask_restful import Resource
from models import db, User, UserSchema

users_schema = UserSchema(many=True)
user_schema = UserSchema()

# TODO: make a base class that holds all of these

class UserViewSet(Resource):
    def get(self):
        users = User.query.all()
        users = users_schema.dump(users).data
        return {'status': 'success', 'data': users}, 200

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400

        data, errors = user_schema.load(json_data)
        if errors:
            return {"status": "error", "data": errors}, 422

        user = User(
            name=data['name'],
            email=data['email'],
            password=data['password'],
            avatar=data['avatar'],
            )
        db.session.add(user)
        db.session.commit()

        result = user_schema.dump(user).data

        return {'status': "success", 'data': result}, 201
