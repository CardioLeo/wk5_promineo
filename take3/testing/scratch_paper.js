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
