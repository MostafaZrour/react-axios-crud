
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
   git clone <repository-url>
   cd <repository-folder>
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
├── components/
│   ├── AddItem.js    # Component for adding items
│   ├── EditItem.js   # Component for editing items
│   ├── ItemList.js   # Component for displaying the list
├── services/
│   └── api.js        # Axios configuration and API functions
├── App.js            # Main application component
└── index.js          # Entry point
```

## API Endpoints

The application expects the following endpoints (if using JSON Server):

- `GET /items` - Get all items.
- `POST /items` - Add a new item.
- `PUT /items/:id` - Update an item by ID.
- `DELETE /items/:id` - Delete an item by ID.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
