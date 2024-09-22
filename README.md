# book-inventory

The Book Inventory Management System is a web application that allows users to manage a collection of books. Users can add new books, filter books by various criteria, and export book data in formats like CSV or JSON. The application is designed with a user-friendly interface and includes features such as search functionality, genre filtering, and user authentication.

#Getting Started
Prerequisites
Node.js (version 14 or higher)
npm (Node Package Manager)
PostgreSQL (or your preferred database system)
pgAdmin (for managing your database)
Git

#Steps to take in order to Test my application:
Clone the Repository
1.Open your terminal or command prompt.

2.Navigate to the directory where you want to clone the project.

3.Run the following command:git clone https://github.com/khushisingh2911/book-inventory.git
4. Change into the projectDirectory :cd book-inventory

#Set Up the Database
1.Create a new database in PostgreSQL named book_inventory.
2.Create the necessary tables based on the provided schema (books, employees, orders, etc.).
3.If you have a CSV file for books, use it to populate the books table.

#Install Dependencies
In the project directory, run the following command to install the required dependencies:
npm install

#Configure Environment Variables
Create a .env file in the root of your project and set the necessary environment variables, such as:
DATABASE_URL=your_database_url
(DATABASE_URL=postgres://username:password@localhost:5432/book_inventory)


PORT=3000

#Run the website using npm start.

# Usage of the website

1.Adding Books: Use the form provided on the 'Add Book' page to input book details and submit them to the database.
2.Filtering Books: You can filter books by genre and publication year. Use the dropdown menus to select your criteria, and the application will display the relevant books.
3.Searching for Books: Use the search functionality to find books by title or author.
4.Exporting Data: Click the export button to download book data in your desired format (CSV or JSON).
5.Creating accounts 

#Challenges Faced
1.Filtering Books: Initially, implementing the filtering functionality was challenging due to the need for complex queries. The final solution involved using a combination of SQL queries to retrieve filtered results based on user selections.

2.Search Functionality: The requirement to search for books by title and author required careful consideration of query performance. Indexing the relevant columns in the database improved search speed and efficiency.


This documentation provides an overview of how to set up and use the Book Inventory Management System. By following these instructions, you should be able to clone the repository, set up the database, and run the application successfully. Feel free to reach out if you encounter any issues or have further questions!
