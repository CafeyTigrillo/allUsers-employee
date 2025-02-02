# 🚀 User Management API

A lightweight and efficient REST API for user management built with Express.js and MySQL.

## 📋 Overview

This API provides a robust backend service for managing user data with a clean architecture following the MVC pattern. It features CORS support and comprehensive error handling.

## 🏗️ Architecture

The project follows a structured MVC (Model-View-Controller) architecture:

- **Controllers**: Handle the business logic and request processing
- **Models**: Manage data structure and database interactions
- **Routes**: Define API endpoints and route configurations

## 🛠️ Technical Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Security**: CORS enabled
- **Port**: 3000

## 🔌 API Endpoints

### Get All Users
```http
GET /api/users/getAllUsers
```

#### Response Format
```json
{
    "success": true,
    "data": [
        {
            // User data fields
        }
    ]
}
```

#### Error Response
```json
{
    "success": false,
    "message": "Error fetching users",
    "error": "Error details"
}
```

## 🚦 CORS Configuration

The API implements a permissive CORS policy allowing:
- All origins (`*`)
- GET methods only
- Status 204 for successful OPTIONS requests

## 🛡️ Error Handling

The API includes a global error handler that:
- Logs errors to the console
- Returns standardized error responses
- Maintains security by not exposing internal error details

## 🏃‍♂️ Getting Started

1. Ensure you have Node.js installed
2. Set up your MySQL database
3. Configure the database connection in `config/database.js`
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the server:
   ```bash
   node app.js
   ```

## 🔒 Security Features

- Express security best practices
- Structured error responses
- No sensitive data exposure
- CORS protection

## 🏛️ Project Structure

```
├── config/
│   └── database.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
└── server.js
```

## ⚡ Performance

- Efficient database queries
- Minimal middleware usage
- Optimized response handling

## 📝 Notes

- The API runs on port 3000 by default
- All responses are in JSON format
- Error logging is enabled for debugging
- CORS is configured for cross-origin requests

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.