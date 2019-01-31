from flask import Blueprint
from flask_restful import Api
from resources.tag import TagViewSet
from resources.user import UserViewSet
from resources.asset import AssetViewSet

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

api.add_resource(TagViewSet, '/tags')
api.add_resource(UserViewSet, '/users')
api.add_resource(AssetViewSet, '/assets')
