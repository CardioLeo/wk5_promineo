class Book {
	constructor(title, author, progress) {
		this.title = title;
		this.author = author;
		this.progress = progress;
	}

	describe() {
		return '${this.title} is written by ${this.author}. I am ${this.progress}% through the book.';
	}
}

class Shelf {
	constructor(shelf) {
		this.shelf = shelf;
		this.books = [];
	}

	addBook(book) {
		if (book instanceof Book) {
			this.shelf.push(book)
		} else {
			throw new Error('You can only add an instance of the Book class. Argument is not a Book: ${book}');
		}
	}
	deleteBook() {
		return 'nothing in the delete book function yet!';
	}
	describe() {
		return '${this.shelf} has ${this.shelf.length} books.';
	}	
}

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
					break; // not yet working
				case '3':
					this.deleteShelf();
					break; // not yet working?
				case '4':
					this.displayShelves();
					break; // works
				default:
					selection = 0; // works
			}
			selection = this.showMainMenuOptions();
		}
		alert('Goodbye!');
	}
	showMainMenuOptions() {
		return prompt("0) exit \n1) create new shelf \n2) view shelf \n3) delete shelf \n4) display all shelves \n");
		// doesn't work if each line of the prompt is on a different line in the js doc;
		// thus I have used the \n escape characters
	}

	showShelfMenuOptions(shelfInfo) {
		return prompt("0) back\n1) create book\n2) delete book\n3) describe book\n------------------------ \n${shelfInfo} ");
	}
	// shelfInfo variable is not showing anthing other than the string literal "${shelfInfo}"

	displayShelves() {
		let shelfString = '';
		// Here, this.shelves.length refers to the this.shelves = [] array created in the Menu Object constructor
		// the following loop loops through all the shelves in the array, while i is less than the number of
		// shelves in the array (.length).
		// Each loop through the array concatenates the shelfString variable, adding a new closing parenthesis,
		// a space, and the next value of i in the array of shelves, plus a new line escape character.
		for (let i = 0; i < this.shelves.length; i++) {
			shelfString += i + ') ' + this.shelves[i].shelf + '\n';
		}
		alert(shelfString);
	}

	createShelf() {
		let shelf = prompt('Enter a topic for this new shelf:')
		this.shelves.push(new Shelf(shelf));
		// works
	}

	// Something in viewShelf() is not working?
	// When viewShelf gives the prompt: "Enter the index of the shelf you wish to view: " nothing happens.
	// What should it return instead? Shouldn't it be a prompt to create books for that shelf or a statement
	// saying that so far there are not books on that shelf?

	viewShelf() {
		let index = prompt('Enter the index of the shelf you wish to view: ');
		// The above line makes index receive the value from prompt.
		// The next line's conditional makes sure that the value of the shelf to be viewed is not less than the
		// minumum of the array of shelves, nor more than the whole length of the array.
		if (index > -1 && index < this.shelves.length) {
			this.selectedShelf = this.shelves[index];
			// A helpful variable to save the index in... perhaps a bit more readable than
			// "this.shelves[index].shelf" as is used in the next line:
			let description = 'Shelf Description: ' + this.selectedShelf.shelf.title + '\n';
			// Actually, yes, this following for loop is definitely clearer because it has the (otherwise
			// seemingly redundant variables, "description" and selectedShelf).
			// Still something is wrong right here in this code; it doesn't know what to display if there are no books, and it may not be correctly accessing individual shelves; what ought it to display for an empty shelf? Shouldn't it be a menu?
			// I think I just got it to work by removing "description" from the parameters o the "let selection =" statement below
			for (let i = 0; i < this.selectedShelf.books.length; i++) {
				description += i + ') ' + this.selectedShelf.shelf[i].title + '\n';
			// I feel that this for loop should work...
			}
		}
		let selection = this.showShelfMenuOptions();
		// does this work? ought it to be a prompt instead? Or it is just saying, the selection is ultimately
		// the description as just defined in the lines directly above?
		while (selection != 0) {
			switch (selection) {
				case '1':
					this.addBook();
					break;
				case '2':
					this.deleteBook();
					break;
				case '3':
					this.describe();
				default:
					selection = 0;
			}
			selection = this.showShelfMenuOptions();
		}
		alert('Back up to the main menu, now...')
	}
}

let menu = new Menu();

menu.start();
