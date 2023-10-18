/*
 * Author: William Z Chadwick
 * Documentation added: 10/17/2023
 * Created for PromineoTech Front-End Bootcamp, Week-05
 * 
 * -#-#-#-#-#-#-#-#-
 * 
 * The following is a CRUD Menu for a bookshelf and books.
 * CRUD stands for "Create, Read, Update, Delete," and it is
 * a common framework for CLI interfaces.
 *
 * Presently, this menu is very loosely based on an Object
 * Oriented (OOP) design, but in actuality it only very loosely
 * uses the OOP features. For instance, class methods that
 * originally were inside the Book and Shelf classes have been
 * moved outside of the classes, so that only the constructor
 * methods remain. The primary reason for this is, frankly,
 * laziness. I got it working with more ease by moving the
 * methods outside of the classes. I certainly want to come back
 * and handle the OOP aspects of this CRUD menu more appropriately
 * - if nothing else for the sake of practicing and learning more.
 *
 * At present this menu works and feels rather tightly designed
 * compared to my previouse attempts (this is in the folder take3/)
 */

// My CRUD Menu begins with two classes, each stripped down to very bare-
// bones constructor methods.
// 
// The Book class constructor receives a title as a parameter and assigns 
// that parameter to the property, "this.title".
// The Shelf class constructor receives a shelf as a parameter and assigns
// that parameter to the property, "this.shelf". This constructor also
// initializes an empty array, so that instances of the class Book can be
// pushed onto the Shelf books array.
//

class Book {
	constructor(title) {
		this.title = title;
	}
}

class Shelf {
	constructor(shelf) {
		this.shelf = shelf;
		this.books = [];
	}
}

// The following class is the real load-bearing structure in my CRUD menu,
// which I consider a design flaw. Preferably a number of the Menu
// methods (class functions) would be appropriately redistributed among
// the first two classes, Book and Shelf. But, as my comments have made
// clear, I felt I had put a good amount of time into this code and
// achieved a tightly functioning CRUD menu. I will be able to practice
// a better OOP design in upcoming projects for the PromineoTech bootcamp.
//
// The constructor for the Menu class is similarly bare as the Shelf
// class's constructor is; it contains an array for shelves, initialized
// to be empty, and a variable initialized to be "null", but later to be
// used to select specific shelves for reading, updating, or deleting.
//
// After the constructor, follow the numerous methods for the Menu class,
// which, again, in a successful and more-well-thought-out OOP design,
// would be much more evenly divided between their relevant classes.
// 
// Listed in order their names are these:
// 
// start()
// showMainMenuOptions()
// showShelfMenuOptions()
// displayShelves()
// createShelf()
// viewShelf()
// deleteShelf()
// displayBooks()
// addBook()
// deleteBook()
//
// These will be described briefly after each method. For now I will
// only point out that the last 3 methods would more reasonably belong
// with the class Book methods and the 4 before those with the class
// Shelf methods. Whereas the start and 2 "show-Menu" methods do, I think
// belong best with the class Menu.
//

class Menu {
	constructor() {
		this.shelves = [];
		this.selectedShelf = null;
	}

	start() {
		let selection = this.showMainMenuOptions();
		while (selection != 0) {
			switch (selection) {
				case '1':
					this.createShelf();
					break; // works
				case '2':
					this.viewShelf();
					break; // works
				case '3':
					this.deleteShelf();
					break; // works
				case '4':
					this.displayShelves();
					break; // works
				default:
					selection = 0; // works
			}
			selection = this.showMainMenuOptions();
			// This line seems redundant, given the let
			// statement at the beginning of the start method
			// but when I comment it out, the CRUD meny
			// doesn't work.
		}
		alert('Goodbye!');
}

// The start() method consists of a variable assignment, a while loop
// (which contains a switch statement with 5 cases), another variable
// assignment (which appears identical to the first one, but appears
// necessary), and finally an alert that sends a message to the UI
// saying 'Goodbye!'
//
// The two assignment statements set the variable "selection" to the
// value: "this.showMainMenuOptions()", which, from what I can tell,
// makes sure to call the function by that name, belonging to "this"
// Menu object (of class Menu). When I commented out the second of
// these two statements and tested it, it created a loop based on the
// alert line instead of looping back to the menu display itself.
//
// The switch statements indicate which functions can be called from the
// main menu. These are the functions which, ideally, would be relegated
// to the class Shelf as methods of that class. Unfortunately, at this
// stage of completion, I could not figure out how to call those methods
// from the switch statement.
//
// Finally, the alert is simply a text display that lets the user know
// that they are exiting the entire CRUD menu.
//
	showMainMenuOptions() {
		return prompt("0) exit \n1) create new shelf \n2) view shelf \n3) delete shelf \n4) display all shelves \n");
	}

	showShelfMenuOptions(booksString) {
		return prompt('0) back\n1) create book\n2) delete book\n3) display books\n------------------------ \n');
	}

// The above two methods show the two different menus and their options
// - as indicated in their function names. Both of these are CRUD menus,
// technically, except that the Shelf menu function does not have a
// function for reading individual books in the same way that the main
// CRUD menu can read, or "view", an individual shelf. They are very
// simple functions, in that they immediately return a prompt. In the
// PromineoTech videos, a JavaScript "template literal" was used, which
// is indicated by back-tics, and enables multiple lines to be returned
// in the prompt without using the escape characters ("\n"). As I could
// not get the template literals to be evoked by using single quotes, due
// to my own mistaking the backtics for single quotes, I had already coded
// them with the escape characters and perhaps am a bit too fond of doing
// things in ways that look "older," as the escape characters look to me.
// I'm not aware of any significant difference between using template
// literals (backtics) over escape characters in this context.
//

	displayShelves() {
		let shelfString = '';
		for (let i = 0; i < this.shelves.length; i++) {
			shelfString += i + ') ' + this.shelves[i].shelf + '\n';
		}
		alert(shelfString);
	}

// The method, displayShelves(), has 3 main elements. First is a variabl
// declaration of an empty string. The next is a for loop which loops
// over the shelves array (but a specific instance of the class, Shelf),
// adding a closing parenthesis, each shelf title, and a new line (in
// that order) for each item in the array, until there are no more items.
// 


	createShelf() {
		let shelf = prompt('Enter a topic for this new shelf:')
		this.shelves.push(new Shelf(shelf));
	}

// The method, createShelf(), has 2 main elements. First is a variable,
// "shelf" - this variable holds the value returned by a prompt function,
// which itself gains that value by waiting for user input. Thus, the
// variable holds user input. In particular, the prompt gives the
// message that in turn gives the variable meaning for the user - namely,
// it uses the input for name a topic for a given shelf.
//
// The second element of this function is a method call from the array
// "shelves" belonging to "this.shelves". If I understand my own code,
// "this.shelves" is an array belonging to an instance of the Menu class.
// The method, then, takes the user input from the first element of the
// createShelf() method and then pushes it to the shelves array with
// that input as a parameter. The input as parameter becomes effectively
// the name of the new instance of the Shelf class on the "this.shelves"
// array.
//
// In other words, in a great deal more words than the code itself
// contains, this method does what it's name says - it creates a new
// instance of a shelf.
//

	viewShelf() {
		let index = prompt('Enter the index of the shelf you wish to view: ');
		if (index > -1 && index < this.shelves.length) {
			this.selectedShelf = this.shelves[index];
		let selection = this.showShelfMenuOptions()

// If I like, I may add "description" as parameter later, as was shown in
// the original videos; however, I was struggling to get "description"
// passed to the function I wanted to use it in, and I decided that I
// had achieved tight enough functionality without getting that working,
// so I omitted that feature for now.

		while (selection != 0) {
			switch (selection) {
				case '1':
					this.addBook();
					break;
				case '2':
					this.deleteBook();
					break;
				case '3':
					this.displayBooks();
				default:
					selection = 0;
			}
			selection = this.showShelfMenuOptions();
		}
		                } else {
                        alert('This shelf does not exist!')
                }
		alert('Back up to the main menu, now...')
	}

// The viewShelf() method also does what it says, like the previous
// method and like any good abstraction. This method has a lot more
// elements than the previous one, though.
// 
// First, again, is a variable declaration; then an if statement
// (technically an if-else statement, but you have to read a bit to
// find the brief else); and finally two alerts. But that's not all!
// Because inside the if statement are: two assignment statements, a
// while loop (containing switch statements), then finally another
// assignment statement.
//
// The first variable declaration is another variable receiving its
// value from user input via the prompt function. This input is then
// bound to the "index" variable. This variable will be used in the
// switch statements within the while loop. The alert, inside the else
// part of the if-else statement, is for when someone tries to input an
// index for a shelf that does not exist (as it says).
//
// 
//

        deleteShelf() {
                let index = prompt('Enter the index of the shelf you wish to delete: ');
                if (index > -1 && index < this.shelves.length) {
                        this.shelves.splice(index, 1);
                }
        } // works

	displayBooks() {
                let booksString = '';
		let theseBooks = this.selectedShelf.books;
                for (let i = 0; i < theseBooks.length; i++) {
			booksString += i + ') ' + theseBooks[i].title + '\n';
                }
                alert(booksString);
        }


	addBook() {
		// works
		let title = prompt('Enter title for new book: ');
		// let author = prompt('Enter author for new book: ');
		// let progress = prompt('Enter percentage of progress made through book: ');
		// These 2 lines above are commented out primarily
		// because I was struggling to get them printed
		// correctly by the displayBooks() function, and again,
		// I had achieved tight enough functionality for my
		// purposes and for the project specifications that
		// I felt I could omit them.
		this.selectedShelf.books.push(new Book(title)); // name, progress));
	}
	deleteBook() {
		// works
		let index = prompt('Enter the index of the book you wish to delete: ');
		if (index > -1 && index < this.selectedShelf.books.length) {
			this.selectedShelf.books.splice(index, 1);
		}
	}
}

let menu = new Menu();

menu.start();
