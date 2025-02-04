# Kanban-Board

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - https://opensource.org/licenses/MIT

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[License](#license)

[Questions](#questions)

[Resources](#resources)

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3rd-Party Software](#3rd-party-software)

[Screenshots](#screenshots)

[Render Deployed Version](#render-deployed-version)

## Description
Krazy Kanban Board is a web application that allows users to manage their tasks using a Kanban board. Users can create, update, and delete tickets, and assign them to different statuses such as "Todo", "In Progress", and "Done". The application also includes user authentication and authorization features.

## Installation
**Note: The app does not need to be installed unless you wish to run the app locally on your machine. To just use the app go to https://kanban-board-2zcn.onrender.com/**

To install the project, follow these steps:
1. Clone the [repository](https://github.com/Lauren245/Kanban-Board)

2. Navigate to the root level of the project directory

3. Once at the root level, create a .env file with the following variables (which you should add values to)
    - ```DB_NAME=```
    - ```DB_USER=```
    - ```DB_PASSWORD=```
    - ```JWT_SECRET_KEY=``` *Note that JWT_SECRET_KEY is a random string.*

4. Open a new terminal window at the root level and install the dependencies for both the client and server using ```npm install```

5. open another terminal window at the root level and start PostgreSQL by typing ```psql -U postgres```. Then follow the sign in prompts. Once finished, type ```\q``` to quit.

6. On any terminal at the root level of the project, run the following commands:
    - ```npm run build``` to build the project
    - ```npm run seed``` to seed the database
    - ```npm run start:dev``` to start the application

## Usage
1. **Login**: Use one of the test usernames and passwords found in the [Test Logins](#test-logins) section to log in and access the Kanban board.

2. **Create a Ticket**: Click on the "New Ticket" button to create a new task. Fill in the details such as ticket name, description, and assign it to a status column. You can also select which user to assign the ticket to.

3. **Update a Ticket**: Click the "Edit" button on an existing ticket to edit its details. You can change the name, description, and status.

4. **Delete a Ticket**: Click the "Delete" button on an existing ticket to remove it from the board.

5. **Logout**: Click on the "Logout" button to end your session. If you do not log out, you will be logged out automatically in 3 hours.


## Tests
This app is a test for adding authorization and authentication to an existing application (provided by EdEx). You can use software such as Postman and Insomnia to test the routes, however, you must find a way to add the authorization token to the tests.

### Test Logins
Since this application does not have a registration feature, you must use one of the following sets of credentials when running the application.
1. ```username: 'JollyGuru', password: 'password'```
2. ```username: 'SunnyScribe', password: 'password'```
3. ```username: 'RadiantComet', password: 'password'```

## License
Copyright 2025 Lauren Moore

This software uses an [MIT license](https://opensource.org/license/MIT).

## Questions
If you have additional questions, you can contact me at: 

GitHub: [Lauren245](https://github.com/Lauren245)

Email: laurenmoorejm@gmail.com

## Resources

### 3rd-Party Software
- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Vite](https://vite.dev/)

## Screenshots 

**Image of the Krazy Kanban Board login screen.**

![Screenshot of the login page for the 'Krazy Kanban Board' web application. The page has a light gray background with a centered, vertically elongated purple login form. The form displays the title 'Login' in large, bold yellow text. Below the title are labeled input fields for 'Username' and 'Password,' with a username ('JollyGuru') entered and a masked password field. A 'Submit Form' button is positioned below the fields. At the top of the page, 'Krazy Kanban Board' is written in purple text, with a 'Login' button in a white pill-shaped container on the right.](./assets/screenshots/Kanban-Board-Login.jpg)


**Image of the kanban board.**

![Screenshot of the 'Krazy Kanban Board' web application displaying a task management interface. The interface consists of three columns labeled 'Todo,' 'In Progress,' and 'Done,' each with a distinct shade of purple. Each column contains task cards with a title, description, and author. The 'Todo' column includes tasks like 'Implement authentication,' 'Test the API,' and 'Deploy to production.' The 'In Progress' column contains a 'Test ticket,' and the 'Done' column has 'Set up project repository.' Each task card has 'Edit' and 'Delete' buttons. At the bottom left, there are 'Logout' and 'New Ticket' buttons.](./assets/screenshots/Kanban-Board-Tickets.jpg)


**Image of the create ticket page.**

![Screenshot of the 'Krazy Kanban Board' web application displaying a 'Create Ticket' form. The form is centered on a purple background with bold yellow text saying 'Create Ticket.' It includes input fields for 'Ticket Name,' a dropdown for 'Ticket Status' (set to 'In Progress'), a text area for 'Ticket Description,' and a dropdown for 'User's ID' (set to 'JollyGuru'). Below the form, there is a 'Submit Form' button. The page also has a 'Logout' button at the top right.](./assets/screenshots/Kanban-Board-New-Ticket.jpg)


**Image of the edit ticket page.**

![Screenshot of the 'Krazy Kanban Board' web application displaying an 'Edit Ticket' form. The form is centered on a purple background with bold yellow text saying 'Edit Ticket.' It includes input fields for 'Ticket Name' (pre-filled with the existing ticket name being partially visible), a dropdown for 'Ticket Status' (set to the current status which is Todo), and a text area for 'Ticket Description' (pre-filled with the existing description being partially visible). Below the form, there is a 'Submit Form' button. The page also has a 'Logout' button at the top right.](./assets/screenshots/Kanban-Board-Edit-Ticket.jpg)

## Render Deployed Version
[Click here](https://kanban-board-2zcn.onrender.com/) to view the app as deployed on Render.


--- 
**[Back to Top](#kanban-board)**