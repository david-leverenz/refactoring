[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Refactoring Exercise
This project takes starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactors it to be a GraphQL API built with Apollo Server.

# Grader Note
1. I was not able to get everything working by the deadline.  I've made notes below in the description for you.
2. I was unable to set up my repo properly initially and did a lot of coding on the files, before I was able to git add and git commit.  Therefore, there is a huge commit early on and a ton of stuff is added.  I did all of my testing on 7/26 which is where you will see more commits.

## Description
**Working** When you load the search engine you are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button.<br>
**Working** When you click on the Search for Books menu option you are presented with an input field to search for books and a submit button.<br>
**Working** When you are not logged in and enter a search term in the input field and click the submit button you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.<br>
**Working** When you click on the Login/Signup menu option a modal appears on the screen with a toggle between the option to log in or sign up.<br>
**Working** When the toggle is set to Signup you are presented with three inputs for a username, an email address, and a password, and a signup button.<br>
**Working** When the toggle is set to Login you are presented with two inputs for an email address and a password and login button.<br>
**Working** When you enter a valid email address and create a password and click on the signup button your user account is created and you are logged in to the site.  This is working on the backend, not on the front.<br>
**Not Working** When you enter my account’s email address and password and click on the login button the modal closes and you are logged in to the site. This is working on the backend, not on the front.<br>
**Working** When you are logged in to the site the menu options change to Search for Books, an option to see my saved books, and Logout.<br>
**Working** When you are logged in and enter a search term in the input field and click the submit button you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to your account.<br>
**Not Working** When you click on the Save button on a book that book’s information is saved to your account.  This is working on the backend, not on the front.<br>
**Not Working**  When you click on the option to see your saved books you are presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from your account.<br>
**Not Working**  When you click on the Remove button on a book that book is deleted from your saved books list.  This is not working on the backend or frontend.<br>
**Working** When you click on the Logout button you are logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button.

## Links
**GitHub:** https://github.com/david-leverenz/refactoring<br>
**Live Link:** https://immense-badlands-99002-d67f38579355.herokuapp.com/<br>
**Screen Shot:** <br>
![image](https://github.com/david-leverenz/refactoring/assets/131185593/5afc3299-eb09-4df4-b369-d3075939c8d9)


## Getting Started
Use this:
{  "email": "bobby@gmail.com",
  "password": "password"
} to login
### Dependencies
N/A
### Executing program
N/A
## Help
No known issues.
## Authors
David Leverenz 
## Version History
Version 1.0 Initial Release
## License
This project is licensed under the MIT license.
## Acknowledgments
N/A



