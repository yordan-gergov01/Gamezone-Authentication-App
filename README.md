# Gamezone Catalog and Authentication App

**GAMEZONE** is a web-based game catalog application with user authentication (registration and login). Logged-in users can like games, view game details, and search for games by name. The application includes features like pagination, user rights checks, and allows only logged-in users to like games.

## Features

- **Game Catalog**: Displays all games with an image, name, and details button.
- **Authentication**: Users can register and log in.
- **Game Liking**: Logged-in users can like games.
- **Game Details**: Users can view detailed information about each game.
- **Game Search**: Users can search for games by name.
- **Pagination**: Games are displayed across multiple pages.
- **Permission Checks**: The app checks whether the user has permission to perform actions (e.g., liking games).

![Catalog photo 1](https://github.com/user-attachments/assets/d996cbb0-d402-4e53-b1ea-68b4ad9207d7)
![Catalog photo 2](https://github.com/user-attachments/assets/a2f744b1-8e04-4740-85d4-6bbdc41bdc75)
![Catalog photo 3](https://github.com/user-attachments/assets/acac0182-213b-41e4-9331-76ab07e4de8c)
![Catalog photo 4](https://github.com/user-attachments/assets/5e5f4972-8322-4ac6-9150-0388454a15c8)
![Catalog photo 5](https://github.com/user-attachments/assets/31cc7959-1bdf-4cb5-af9c-7ba5b62c1b27)
![Catalog photo 6](https://github.com/user-attachments/assets/9bddc507-051d-41ef-9f24-5f216bf3d173)



## Technologies

- **JavaScript**
- **HTML**
- **CSS**
- **page.js**
- **lit-html**
- **Bootstrap**
- **lite-server**
- **mockAPI** (for backend data and user storage)


## Development Principles

In this project, I follow key software development principles, including:

- **YAGNI** (You Aren't Gonna Need It) – Avoid adding functionality that is not needed at the current stage of development, keeping the code lightweight and efficient.
- **KISS** (Keep It Simple, Stupid) – Strive to keep solutions as simple and understandable as possible.
- **DRY** (Don't Repeat Yourself) – Avoid code duplication by reusing logic and components wherever possible.


## REST API Standards

This project adheres to REST API standards, utilizing the following HTTP methods for resource management:

- **GET**
- **POST**
- **PUT**
- **PATCH**
- **DELETE**

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yordan-gergov01/GAMEZONE.git

2. Install dependencies

    **npm install**

4. Start the local server

   **npm start**

6. Open the app in your browser at:

   **http://localhost:3000**
