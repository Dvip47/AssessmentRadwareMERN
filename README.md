# React Item Management App

This project is a React application designed to manage various entities such as users and accounts. It includes an item list page displaying the entities in a table format and an item detail page for displaying detailed information about a selected entity. The backend is powered by Node.js and Express, with data fetched from a MongoDB database.

## Features

- **List Page**: Displays entities in a table format.
- **Detail Page**: Shows detailed information for a selected entity.
- **Responsive Design**: Optimized for different screen sizes.
- **API Integration**: Fetches data from a Node.js backend connected to a MongoDB database.
- **Dockerized**: Can be easily run in a Docker container.

## Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker

## Prerequisites

- Node.js (version 14 or later)
- Docker (optional, for containerization)
- MongoDB (local or cloud instance)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Dvip47/AssessmentRadwareMERN.git
    cd react-item-management-app
    ```

2. **Install dependencies for the frontend**:
    ```bash
    cd frontend
    npm install
    ```

3. **Install dependencies for the backend**:
    ```bash
    cd 
    ./backend
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory with the following content:
        ```plaintext
        MONGODB_URI=mongodb+srv://vipin:1234@cluster0.3xpdc7z.mongodb.net/api-crud
        ```

## Running the Application

### Using Node.js

1. **Run the backend**:
    ```bash
    cd backend
    npm start
    ```

2. **Run the frontend**:
    ```bash
    cd ./frontend
    npm start
    ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Using Docker

1. **Build the Docker image**:
    ```bash
    docker build -t items-app .
    ```

2. **Run the Docker container**:
    ```bash
    docker run -p 3000:3000 -p 8080:8080 items-app
    ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

react-item-management-app/
├── backend/ # Backend source code
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── server.js # Entry point for the backend
│ └── package.json # Backend dependencies and scripts
├── frontend/ # Frontend source code
│ ├── src/ # React Utility, components and pages
│ ├── public/ # Public assets and index.html
│ └── package.json # Frontend dependencies and scripts
├── Dockerfile # Docker configuration
└── README.md # Project documentation


## API Endpoints

### Users

- **GET /api/users**: Fetch all users
- **GET /api/users/:id**: Fetch user by ID

## Acknowledgements

- [Material-UI](https://mui.com/) for UI components.
- [Axios](https://axios-http.com/) for HTTP requests.
- [MongoDB](https://www.mongodb.com/) for the database.
- [Docker](https://www.docker.com/) for containerization.
