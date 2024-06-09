# Dynamic Routing Project

This project allows you to dynamically create, manage, and utilize routes with specified actions and types.

## Project Setup

1. **Install Node.js** (version 12.x or above).
2. **Clone the repository**:
    ```bash
    git clone https://github.com/shiva-rockers/dynamic-routing.git
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Set up the `.env` file** in the root directory. Refer to `.env.example` for guidance.
5. **Start the server**:
    ```bash
    npm start
    ```
6. **API Documentation**: Follow the Postman documentation for detailed working on routes [here](https://documenter.getpostman.com/view/1485597/2sA3XLDixp).

## Routing Details

### Endpoint: POST `localhost:8000/route/{dynamic-route-name}`
- **Payload**: `{ action, type, ...dynamic_params }`

### Actions (Optional)
Define the main action for the route. Supported values:
- `register-route`: Creates a new route in memory.
- `unregister-route`: Deletes the route from memory.
- `re-register-route`: Deletes the existing route and creates a new one in memory.
- `list-registered-routes`: Lists all the registered routes.

### Types (Optional)
Define the action of the dynamically created route. Supported values:
- `download-file`: Downloads files stored in the public directory.
- `create-user`: Creates a new user in the MongoDB database.
- `append-params`: Appends parameters in the form of a response.

### Combination of `action` and `type` can be used to define dynamic routes.

## Sample Payloads

### 1. Register a Route to Append Params in Response

**Step 1 - Register Route**
- **Endpoint**: POST `localhost:8000/route/hello`
- **Payload**:
    ```json
    {
        "action": "register-route",
        "type": "append-params"
    }
    ```

**Step 2 - Hit the Dynamic Route**
- **Endpoint**: GET `localhost:8000/route/hello`
- **Payload**:
    ```json
    {
        "name": "<NAME>"
    }
    ```

### 2. Register a Route to Download Files

**Step 1 - Register Route**
- **Endpoint**: POST `localhost:8000/route/download-file`
- **Payload**:
    ```json
    {
        "action": "register-route",
        "type": "download-file"
    }
    ```

**Step 2 - Hit the Dynamic Route**
- **Endpoint**: POST `localhost:8000/route/download-file`
- **Payload**:
    ```json
    {
        "fileName": "<FILE_NAME>"
    }
    ```

### 3. Register a Route to Create a User

**Step 1 - Register Route**
- **Endpoint**: POST `localhost:8000/route/create-user`
- **Payload**:
    ```json
    {
        "action": "register-route",
        "type": "create-user"
    }
    ```

**Step 2 - Hit the Dynamic Route**
- **Endpoint**: POST `localhost:8000/route/create-user`
- **Payload**:
    ```json
    {
        "username": "<USER_NAME>",
        "email": "<EMAIL>"
    }
    ```