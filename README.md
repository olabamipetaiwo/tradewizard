Description
TradeCore Wizard is a web app to allow librarians to navigate through various steps in order to
add a new book to the system.

Github Repo: https://github.com/olabamipetaiwo/tradewizard

Live Web App: https://tradewizard-a891a.web.app/

Features
The wizard can have a maximum of 4 steps:
a. Genre
b. Subgenre
c. Add subgenre
d. Information

2. The number of steps can change dynamically depending on previously answered
   questions, with the steps indicator at the top of the page only displaying the available
   steps. Usually, you will have three steps, but if the user chooses to add a new genre,
   you will have four steps.
3. A user can move to the next step only after they choose an answer (genre and
   subgenre), or populate and submit a form (add genre and information). The form should
   be submitted by using a ‘fake fetch’ technique that will console the log request.
4. The user can always navigate back to the beginning of the wizard.
5. The last step button should always have a Complete flow instead of a Next step label.
6. A description in the information form is required only if the selected substatus is flagged:
   “isDescriptionRequired”: true.
7. Aside from the description, only the title field is required.
8. When a user comes to the end, the wizard should be able to restart the wizard.

Git clone the repository via https://github.com/olabamipetaiwo/tradewizard
Run yarn install to get the neccessary dependencies
Run yarn dev to start the application

Approach Taken:

Managed State with the contextAPI
Separated the states into two:
Books (To handle Book Createion & Book Listing)
Steps ( To handle step navigation)
Created a useStep and useBook Hook to prevent multiple imports of useContext

The GenereForm is loaded first with genres from the common.js file in the utils folder,
Proper validation methods to check a genre is selected before you proceed to the next step(SubGenre Form) in which you can selct a subgenre
or add a new subgenre which will lead the user to the last step to fill in the book details,
On the last page(Book Form), only the title is required and/or description(depending on the flag on isDescriptionRequired) ,
After a book is created, we have book listing component listing only the title of the book and a success modal in which the user can navigate back to the beggining of the form to add another book.

The custom styles are defined in the styles folder and makes use of SCSS classes separated into abstracts,components and fonts.

Areas to improve upon:
The design of the application can be improved upon.
