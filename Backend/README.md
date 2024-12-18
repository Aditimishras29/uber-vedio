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

## `/users/login` Endpoint

### Description

Authenticates a users using their email and password, returning a JWT token upon sucess

### HTTP Method

`POST`

### Endpoint

`/user/login`

### Request Body

The request body should be in JSON format and inlude the following fields:

- `email` (string , required): Users,s email address (must be a valid emails).
- `password` (string, reruired): User's password (minimum 6 characters).

### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): The first name of the user (Minimum length of 3 characters)
        - `lastname` (string): The last name of the user (Minimum length of 3 characters)
    - `email` (string): The email address of the user (Valid email address)
    - `password` (string): The hashed password of the user (Minimum length of 6 characters)
- `token` (String): A JSON Web Token (JWT) that should be included in the headers of all subsequent requests to authenticate the user.



## `/user/profile` Endpoint

### Description


Retrieves the authenticated user's profile information.

### HTTP Method

`GET`

### Authentication

Require a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): The first name of the user (Minimum length of 3 characters)
        - `lastname` (string): The last name of the user (Minimum length of 3 characters)
    - `email` (string): The email address of the user (Valid email address)
  


  ## `/user/logout` Endpoint

### Description


Logout the current users and blacklisted the token provided in cookies or headers

### HTTP Method

`GET`

### Authentication

Require a valid JWT token in the Authorization headeror cookie:





