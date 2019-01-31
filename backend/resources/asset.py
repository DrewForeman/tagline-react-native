from flask import jsonify, request
from flask_restful import Resource
from models import db, Asset, AssetSchema

assets_schema = AssetSchema(many=True)
asset_schema = AssetSchema()

# TODO: make a base class that holds all of these

class AssetViewSet(Resource):
    def get(self):
        pass

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400

        data, errors = asset_schema.load(json_data)
        if errors:
            return {"status": "error", "data": errors}, 422

        asset = Asset(
            url=data['url']
            )
        db.session.add(asset)
        db.session.commit()

        result = asset_schema.dump(asset).data

        return {'status': "success", 'data': result}, 201
