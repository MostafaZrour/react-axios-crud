
# React CRUD Application with Axios

This is a simple React application that demonstrates CRUD (Create, Read, Update, Delete) operations using Axios to interact with a RESTful API.

## Features

- **Create**: Add new items to the list.
- **Read**: Display a list of items fetched from an API.
- **Update**: Edit existing items in the list.
- **Delete**: Remove items from the list.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests.
- **Bootstrap**: For styling.
- **JSON Server** (or any REST API): For simulating the backend (optional).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MostafaZrour/react-axios-crud.git
   cd react-axios-crud
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. If using `json-server` as a backend, set it up:

   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3001
   ```

   Ensure your API URL in the React app is set to `http://localhost:3001`.

## Project Structure

```
src/
├── pages/
│   ├── Add.jsx       # Form to add a new item (user)
│   ├── Edit.jsx      # Form to edit an existing item (user)
│   ├── Layout.jsx    # Component for layout and routing logic
│   └── Home.jsx      # Component for displaying the list of items (users)
├── App.js            # Main application component
├── index.js          # Entry point of the application
└── db.json           # Mock database file for JSON Server

```

## API Endpoints

The application expects the following endpoints (if using JSON Server):

- `GET /users` - Get all users.
- `POST /users` - Add a new user.
- `PUT /users/:id` - Update an user by ID.
- `DELETE /users/:id` - Delete an user by ID.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
