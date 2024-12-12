# Backend API Documentation

## `/user/register` Endpoint

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

### HTTP Method
`POST`


### Request Body
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

### Example Response:
- `user` (object):
    - `fullname` (object):
        - `firstname` (string): The first name of the user (Minimum length of 3 characters)
        - `lastname` (string): The last name of the user (Minimum length of 3 characters)
    - `email` (string): The email address of the user (Valid email address)
    - `password` (string): The hashed password of the user (Minimum length of 6 characters)
- `token` (String): A JSON Web Token (JWT) that should be included in the headers of all subsequent requests to authenticate the user.