# Express Server Application

## Description
The Express server application is designed to manage and display product details, order details, and user details. The project utilizes a locally stored dataset to store information about products, orders, and users. The server exposes several endpoints, including GET methods that allow querying based on the ID parameter. The server validates and processes input using regular expressions (regex) to enhance data integrity and security. Additionally, the application incorporates CORS (Cross-Origin Resource Sharing) to facilitate secure communication between the server and client applications running on different domains.

## Setup
* Clone the repository

``git clone <repository-url>``
``cd express-server-application``

* Install Dependencies

`npm install`

* npm start

`npm start`

## Endpoints
### Home URL

`http://localhost:3000/`

### Product Details
* Endpoint: /cart
* Method: GET
* Description: Get a list of all products.

### Order Details
* Endpoint: /order
* Method: GET
* Description: Get a list of all orders.

* Endpoint: /get?id=
* Method: GET
* Description: Get details of a specific order based on ID.

### User Details
* Endpoint: /user
* Method: GET
* Description: Get a list of all users.

* Endpoint: /user/:id
* Method: GET
* Description: Get details of a specific user based on ID.

### CORS Integration
* CORS is implemented to allow secure communication between the server and client applications running on different domains.
* This ensures a controlled access mechanism and enhances the overall security of the application.

### Regex Validation
* Regular expressions are employed to validate and process input data, enhancing data integrity and security.
* Input validation is implemented for key parameters to prevent malicious or incorrect data.

## Usage
* Users can interact with the server through HTTP requests to retrieve product, order, and user details.
* The ID parameter can be utilized in GET requests to access specific information.

This Express server application provides a robust foundation for managing and displaying details related to products, orders, and users, offering a scalable solution for future development and expansion.

## Example Usage
* Get all products: `http://localhost:3000/cart`
* Get all orders: `http://localhost:3000/order`
* Get order with ID 2: `http://localhost:3000/get?id=2`
* Get all users: `http://localhost:3000/user`
* Get user with ID 3: `http://localhost:3000/user/3`

## Error Handling
The server provides meaningful error responses to enhance the user experience.

404 Not Found: Returned when an endpoint or resource is not found.

