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
					break;
				case '2':
					this.viewShelf();
					break;
				case '3':
					this.deleteShelf();
					break;
				case '4':
					this.displayShelves();
					break;
				default:
					selection = 0;
			}
			selection = this.showMainMenuOptions();
		}
		alert('Goodbye!');
	}
	showMainMenuOptions() {
		return prompt("0) exit \n1) create new shelf \n2) view shelf \n3) delete shelf \n4) display all shelves \n");
	}

	showShelfMenuOptions(shelfInfo) {
		return prompt("0) back\n1) create book\n2) delete book\n ------------------------ \n${shelfInfo} ");
	}

	displayShelves() {
		let shelfString = '';
		for (let i = 0; i < this.shelves.length; i++) {
			shelfString += i + ') ' + this.shelves[i].shelf + '\n';
		}
		alert(shelfString);
	}

	createShelf() {
		let shelf = prompt('Enter a topic for this new shelf:')
		this.shelves.push(new Shelf(shelf));
	}

	viewShelf() {
		let index = prompt('Enter the index of the shelf you wish to view: ');
		if (index > -1 && index < this.shelves.length) {
			this.selectedShelf = this.shelves[index];
			let description = 'Shelf Description: ' + this.selectedShelf.shelf + '\n';

			for (let i = 0; i < this.selectedShelf.books.length; i++) {
				description += i + ') ' + this.selectedShelf.shelf[i].title + '\n';
			}
		}
		let selection = this.showShelfMenuOptions(description);
		switch (selection) {
			case '1':
				this.createBook();
				break;
			case '2':
				this.deleteBook();
		}
	}
}

let menu = new Menu();

menu.start();
