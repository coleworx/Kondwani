# Kondwani Risk Management System - API Documentation

## Overview
The Kondwani API provides endpoints for identifying, assessing, and mitigating project risks.

## Base URL
```
http://localhost:5000/api
```

## Authentication
All authenticated endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Health Check
- **GET** `/health`
- **Description**: Check if the API is running
- **Response**: `{ status: "Kondwani Risk Management API is running" }`

### Risks

#### Get All Risks
- **GET** `/risks`
- **Description**: Retrieve all project risks
- **Query Parameters**:
  - `page` (optional): Page number for pagination
  - `limit` (optional): Number of risks per page

#### Create Risk
- **POST** `/risks`
- **Description**: Create a new risk entry
- **Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "severity": "low|medium|high|critical",
    "probability": "number (0-1)",
    "mitigation_plan": "string"
  }
  ```

#### Update Risk
- **PUT** `/risks/:id`
- **Description**: Update an existing risk

#### Delete Risk
- **DELETE** `/risks/:id`
- **Description**: Delete a risk entry

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid request parameters"
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication token required"
}
```

### 500 Internal Server Error
```json
{
  "error": "Something went wrong!"
}
```
