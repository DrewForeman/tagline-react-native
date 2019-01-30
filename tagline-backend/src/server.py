from flask import Flask, request, abort, jsonify
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


DESCRIPTION = 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apinventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'

OWNER_1 = {
    'name': 'Marianne Patel',
    'image': 'https://randomuser.me/api/portraits/thumb/women/63.jpg',
}

OWNER_2 = {
    'name': 'Nathan Hale',
    'image': 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
}

OWNER_3 = {
    'name': 'William Aubert',
    'image': 'https://randomuser.me/api/portraits/thumb/men/29.jpg',
}

tags = [
    { 'id': 1, 'title': 'First Tag', 'asset': 'https://loremflickr.com/640/360', 'description': DESCRIPTION, 'owner': OWNER_1, 'latitude': '', 'lonigitude': '' },
    {'id': 2, 'title': 'Second Tag', 'asset': 'https://loremflickr.com/640/360', 'description': DESCRIPTION, 'owner': OWNER_2, 'latitude': '', 'lonigitude': '' },
    { 'id': 3, 'title': 'Third Tag', 'asset': 'https://loremflickr.com/640/360', 'description': DESCRIPTION, 'owner': OWNER_3, 'latitude': '', 'lonigitude': '' },
    { 'id': 4, 'title': 'Fourth Tag', 'asset': 'https://loremflickr.com/640/360', 'description': DESCRIPTION, 'owner': OWNER_1, 'latitude': '', 'lonigitude': '' },
    { 'id': 5, 'title': 'Fifth Tag', 'asset': 'https://loremflickr.com/640/360', 'description': DESCRIPTION, 'owner': OWNER_3, 'latitude': '', 'lonigitude': '' },
]

class TagViewSet(Resource):
    def get(self):
        # return tags for a geographic area
        #
        # qs = Tag.query.filter(Tag.latitude >= min_lat,
        #                         Tag.latitude <= max_lat,
        #                         Tag.longitude >= min_lng,
        #                         Tag.longitude <= max_lng)
        #                         .limit(10)
        #                         .order_by(Tag.tag_id.desc())
        #                         .all()
        return {'tags': tags}

    def post(self, **args):
        # create a new tag
        print('added new tag')
        return {}, 201

api.add_resource(TagViewSet, '/tags')
# api.add_resource(TagViewSet, '/tags/<string:tag_id>')


if __name__ == '__main__':
    app.run(debug=True)
