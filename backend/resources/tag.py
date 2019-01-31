from flask import jsonify, request
from flask_restful import Resource
from models import db, Tag, TagSchema

asset = 'https://loremflickr.com/640/360'
tags_schema = TagSchema(many=True)
tag_schema = TagSchema()
class TagViewSet(Resource):
    def get(self):
        # return tags for a geographic area

        tags = Tag.query.all()
        tags = tags_schema.dump(tags).data
        return {'status': 'success', 'data': tags}, 200

    def post(self):
        # create a new tag

        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400

        # Validate and deserialize input
        data, errors = tag_schema.load(json_data)
        if errors:
            return {"status": "error", "data": errors}, 422

        tag = Tag(
            latitude=data['latitude'],
            longitude=data['longitude'],
            title=data['title'],
            artist=data['artist'],
            description=data['description'],
            primary_image=data['primary_image']
            )
        db.session.add(tag)
        db.session.commit()

        result = tag_schema.dump(tag).data

        return {'status': "success", 'data': result}, 201
