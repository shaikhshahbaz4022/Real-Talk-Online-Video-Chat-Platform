const BASE_SERVER_URL = "http://localhost:3300"
//******************    ******************//
new AWN().asyncBlock(
    fetch(`${BASE_SERVER_URL}/start`),
    'Room Joined Successfully',
)

