class Book {
	constructor(title, author, progress) {
		this.title = title;
		this.author = author;
		this.progress = progress;
	}

	describeBook() {
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
			this.books.push(book) // was originally this.shelf.push(book) -- we'll see if this fixes it
		} else {
			throw new Error('You can only add an instance of the Book class. Argument is not a Book: ${book}');
		}
	}	
// earlier location of	displayBooks()
	displayBooks() {
                let booksString = '';
                for (let i = 0; i < this.books.length; i++) {
                        booksString += i + ') ' + this.books[i].book + '\n';
                }
		return(booksString);
                // alert(booksString);
        }


	describeShelf() {
		// just now I changed this.shelves.length to this.books.length
		return 'This shelf has ' + this.shelves.length + '  books.';
		// let shelfInfo = console.log("The topic of this shelf is ${shelf} and this shelf has ${this.books.length} many books.")
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
					break; // now much more in working order
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
		// ...
		// ohhhh, he said "template literals." The reason why the template literals don't work is because they require backtics `` and I was using single quotes ''
	}

	showShelfMenuOptions(booksString) {
		return prompt('0) back\n1) create book\n2) delete book\n3) display books\n------------------------ \n');
			// + this.shelf.displayBooks(booksString);
		// got rid of ${shelfInfo} at the end of this return prompt; replaced it with booksString
	}
	// shelfInfo variable is not showing anthing other than the string literal "${shelfInfo}"
	// has ${shelfInfo} even been defined anywhere? I can't find it just now... That var and 
	// the var description apparently are not sufficiently defined. thought technically
	// description is defined within viewShelf().

	displayShelves() {
		let shelfString = '';
		for (let i = 0; i < this.shelves.length; i++) {
			shelfString += i + ') ' + this.shelves[i].shelf + '\n';
		}
		alert(shelfString);
		// works
	}


	createShelf() {
		let shelf = prompt('Enter a topic for this new shelf:')
		this.shelves.push(new Shelf(shelf));
		// works
	}

	viewShelf() {
		let index = prompt('Enter the index of the shelf you wish to view: ');
		if (index > -1 && index < this.shelves.length) {
			this.selectedShelf = this.shelves[index];
			let description = 'Shelf Description: ' + this.selectedShelf.shelf + '\n';
			for (let i = 0; i < this.selectedShelf.books.length; i++) {
				description += i + ') ' + this.selectedShelf.shelf[i].title + ' written by ' + this.selectedShelf.books[i].author
				 + ' for which I am ' + this.selectedShelf.books[i].progress + ' percent through the book.' + '\n';
			}
		} else {
                	alert('This shelf does not exist!')
			// added this just now, not original to PromineoTech outline
			// two problems: 1, after the alert, the team info page still displays,
			// but if the team doesn't exist, it shouldn't display
			// 		 2, ...I'm trying to figure out why that is
		}
		let selection = this.showShelfMenuOptions() // add description as parameter later!
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
		alert('Back up to the main menu, now...')
		// works
	}
        deleteShelf() {
                let index = prompt('Enter the index of the shelf you wish to delete: ');
                if (index > -1 && index < this.shelves.length) {
                        this.shelves.splice(index, 1);
                }
        }

	displayBooks() {
                let booksString = '';
		let theseBooks = this.selectedShelf.books;
                for (let i = 0; i < theseBooks.length; i++) {
			booksString += i + ') ' + theseBooks[i].title + ' written by ' + theseBooks[i].author + '\n'; //' and I am ' theseBooks[i].progress + ' percent of the way through the book.' + '\n';
                }
                alert(booksString);
                // alert(booksString);
        }


	addBook() {
		// appears to work
		let title = prompt('Enter title for new book: ');
		let author = prompt('Enter author for new book: ');
		let progress = prompt('Enter percentage of progress made through book: ');
		this.selectedShelf.books.push(new Book(title, name, progress));
	}
	deleteBook() {
		// unclear if works because prompt doesn't show the ${shelfInfo} var
		let index = prompt('Enter the index of the book you wish to delete: ');
		if (index > -1 && index < this.selectedShelf.books.length) {
			this.selectedShelf.books.splice(index, 1);
		}
	}
}

let menu = new Menu();

menu.start();
