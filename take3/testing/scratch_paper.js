        displayShelves() {
                let shelfString = '';
                for (let i = 0; i < this.shelves.length; i++) {
                        shelfString += i + ') ' + this.shelves[i].shelf + '\n';
                }
                alert(shelfString);
                // works
        }

