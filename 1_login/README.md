# User Registration and AI Agent Management System

## Description

This project is a user registration and login system implemented with Flask on the backend and React on the frontend. Additionally, it provides functionalities for managing AI agents, including creating and chatting with agents. Users can register by providing their personal information and uploading optional documents such as a passport copy, driver's license, and a selfie.

## Project Structure

The project is organized into the following files:

### Backend

- **config.py**: Configuration for the Flask application and the MySQL database.
- **main.py**: The main entry point for the Flask application, defining the routes for registration and login.
- **models.py**: Defines the `User` model for the database, including attributes like `username`, `email`, `password`, `address`, among others.

### Frontend

- **App.jsx**: The main React component that handles routing and rendering of different components such as `Register`, `MobileMenu`, `AgentLibrary`, `CreateAgent`, and `Chat`.
- **Register.jsx**: React component for user registration, handles data input and file uploads.
- **AgentLibrary.jsx**: Component for displaying the agent library, where users can view and select agents to chat with.
- **CreateAgent.jsx**: Component that allows creating new AI agents.
- **Chat.jsx**: Chat component to interact with AI agents via text chat.
- **MobileMenu.jsx**: Component that handles the web navigation menu.

## Installation

### Prerequisites

- **Python 3.x**
- **MySQL**
- **Node.js and npm (for the frontend)**

## How to run 

### Frontend

To run the frontend be sure that you are in the `1_login` folder, you can check this by typing `cd 1_login` in the console, once you are in the folder directory, type `npm run dev`, this should initialize the frontend.

### Backend

To run the backend be sure that you are in the `backend` folder, you can check this by typing `cd backend` in the console, once you are in the folder directory, type `python main.py`, this should initialize the backend.