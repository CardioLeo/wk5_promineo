// Author: William Z Chadwick
// Date Created: 09/06/2022
// Date Modified: 09/06/2022
// Description: A JavaScript Application for my own Booklist, for Promineo Tech's Week 5 Project


// players = books
// teams = shelves


class Book {
	constructor(title, author, description) {
		this.title = title;
		this.author = author;
		this.description = description;
	}
	describe() {
		return "${this.title} is written by ${this.author} and could be described as such: '${this.description}'.";
	}
}

class Shelf {
	constuctor(name, position) {
	this.name = name;
	this.position = position;
	this.shelf = [];
	// line 26 here, this.shelf = []; is identical to line 43, this.shelf = []; is that wrong?
	}
	addBook(book) {
		if (book instanceof Book) {
			this.shelf.push(book);
		} else {
			throw new Error("You can only add an instance of the Book class to Shelf class array. The following Argument is not a Book: ${book}.");
		}
	}
	describe() {
		return "${this.name} has ${this.shelf.length} many books."
	}
}

class Menu {
	constructor() {
		this.shelf = [];
		this.selectedShelf = null;
	}
	start() {
		let selection = this.showMainMenuOptions();
		
		
		while (selection != 0) {
			switch (selection) {
				case "1":
					this.createShelf();
					break;
				case "2":
					this.viewShelf();
					break;
				case "3":
					this.deleteShelf();
					break;
				case "4":
					this.displayShelf();
					break;
				default:
					selection = 0;
			}
			selection = this.showMainMenuOptions();
		}
		

		alert("Goodbye!");
	}
	
	showMainMenuOptions() {
		return prompt(
			"0) exit" + "\n" +
			"1) create new shelf" + "\n" +
			"2) view shelf" + "\n" + 
			"3) delete shelf" + "\n" +
			"4) display all shelves"
			);
	}
	showShelfMenuOptions() {
		return prompt(
			`0) back\n1) create book\n2) delete book\n3) list books\n4) list books with descriptions\n5) list book description\n---------------\n\${shelfInfo}`
		);
	}
	
	displayShelves() {
		let shelfString = "";
		for (let i = 0; i < this.shelf.length; i++) {
			shelfString += i + ") " + this.shelf[i].title + "\n";
		}
		alert(shelfString);
	}
	
	createShelf() {
		let name = prompt("Enter name for a new shelf: ");
		this.shelf.push(new Shelf(name));
	}
	
	viewShelf() {
		let index = prompt("Enter the index of the shelf you wish to view: ");
		// this loop is to validate input so input does not create errors
		if (index > -1 && index < this.shelf.length) {
			this.selectedShelf = this.shelf[index];
			let description = "Shelf Name: " + this.selectedShelf.name + "\n";
			for (let i = 0; i < this.selectedShelf.book.length; i++) {
				description += i + ") " + this.selectedShelf.book[i].title + " - " + this.selectedShelf.book[i].author + " - " + this.selectedShelf.book[i].description + "/n";
			}
// what is the difference between players, teams, and player; or in my case, books, shelves and ...? just trying to make sure I got everything properly sorted out.
			let selection = this.showShelfMenuOptions(description);
			switch(selection) {
			// this selection is different from the other menu option
				//case "1":
				//	this.back();
				//	break;
				case "1":
					this.createBook();
					break;
				case "2":
					this.deleteBook();
					break;
				case "3":
					this.listBooks();
					break;
				case "4":
					this.listBooksWDescriptions();
					break;
				case "5":
					this.listAuthors();
					break;
				default:
					selection = 0;
			}
		}
	}
	deleteShelf(){
		let index = prompt("Enter the index of the shelf you wish to delete: ");
		if (index > -1 && index < this.shelf.length) {
			this.shelf.splice(index, 1);
		}
	}
	createBook() {
		let title = prompt("Enter title for new book: ");
		let author = prompt("Enter author for new book: ");
		let description = prompt("Enter description for new book: ");
		this.selectedShelf.shelf.push(new Book(title, author, description));
	}
	deleteBook() {
		let index = prompt("Enter the index of the book you wish to delete: ");
		if (index > -i && index < this.selectedShelf.shelf.length) {
			this.selectedShelf.shelf.splice(index, 1);
		}
	}
	listBooks() {
		// let index = prompt("Enter the index of the author you wish you list: ");
		// if (index )
	}
	listBooksWDescriptions() {
		// let index = prompt("Enter the index of the author you wish you list: ");
		// if (index )
	}
	listAuthors() {
		// let index = prompt("Enter the index of the author you wish you list: ");
		// if (index)
	}
	//0) back\n1) create book\n2) delete book\n3) list books\n4) list books with descriptions\n5) list book description
}

let menu = new Menu;
menu.start();
