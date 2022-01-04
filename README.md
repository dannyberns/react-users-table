# Users-Table

Users-Table is a one page application that provides a table based information about different users.


## Links

https://react-users-table.netlify.app/

## Appendix

#### Home Page - Users
Contains an informative table of users, populated with different users using Random User Generator API.
Each row represents a different user with his/her personal information. ( I.E picture, email, age, etc..)

- **Sorting** - users can be sorted (asc/desc) by each of their attributes simply by clicking on the desired attribute table header.
- **MailTo** - clicking on users email address, will redirect to compose new email.
- **User Details** - clicking on any user row will cause a page redirection to User Details page.


#### Users-Details Page
Here, all data from chosen user will be displayed alongside Leaflet Map, showing users
location (using provided coords from the API) as well as a tooltip with their address and city.

- **All users button** - redirects to Main page.


## Screenshots

#### Home Page - Users

![App Screenshot](https://i.ibb.co/9mxDnn5/users-table-main.png)

#### User Details Page

![App Screenshot](https://i.ibb.co/3T1HB6y/users-table-user.png)



## Installation

Install Users-Table with npm

```bash
  # Clone this repository
  $ git clone https://github.com/dannyberns/react-users-table

  # Go into the repository
  $ cd react-users-table

  # Install dependencies
  $ npm install

  # Run the app
  $ npm start
```
    
## Tech Stack & Acknowledgements

- React
- [Leaflet - Main Docs](https://react-leaflet.js.org/) - React components for Leaflet maps
- [MUI - Main Docs](https://mui.com/) - React UI library
- [Random User API - Main Docs](https://randomuser.me/documentation) - Random User Generator API



