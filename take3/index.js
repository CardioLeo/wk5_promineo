class Book {
	constructor(title, author, progress) {
		this.title = title;
	}
}

class Shelf {
	constructor(shelf) {
		this.shelf = shelf;
		this.books = [];
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
	}

	showShelfMenuOptions(booksString) {
		return prompt('0) back\n1) create book\n2) delete book\n3) display books\n------------------------ \n');
	}

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
		                } else {
                        alert('This shelf does not exist!')
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
			booksString += i + ') ' + theseBooks[i].title + '\n';
                }
                alert(booksString);
        }


	addBook() {
		// appears to work
		let title = prompt('Enter title for new book: ');
		// let author = prompt('Enter author for new book: ');
		// let progress = prompt('Enter percentage of progress made through book: ');
		this.selectedShelf.books.push(new Book(title, name)); //, progress));
	}
	deleteBook() {
		// appears to work
		let index = prompt('Enter the index of the book you wish to delete: ');
		if (index > -1 && index < this.selectedShelf.books.length) {
			this.selectedShelf.books.splice(index, 1);
		}
	}
}

let menu = new Menu();

menu.start();
