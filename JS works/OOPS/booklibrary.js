class Library {
    books = {
        "halfgirlfriend": { book_name: "halfgirlfriend", author: "chethan bagath", price: 300, avl_copies: 100, copies_sold: 100 },
        "things": { book_name: "things", author: "chethan", price: 200, avl_copies: 100, copies_sold: 80 },
        "thealchemist": { book_name: "thealchemist", author: "paulo", price: 150, avl_copies: 50, copies_sold: 500 }
    }


    findBook(book_name) {   //prnt full details of the book
        for (let book_name in this.books) {
            if (book_name == "things") {
                                console.log(this.books.things)
            }
            else {
                                console.log("Listed book not in the library");
            }

        }
    }
    filterBook() {               //sort based on sold copies
        var arr = []
        arr.push(this.books.halfgirlfriend, this.books.things, this.books.thealchemist)
        var sold = arr.sort((b1, b2) => b2.copies_sold - b1.copies_sold).sort((b2, b3) => b3.copies_sold - b2.copies_sold)
        console.log("Sorted list wrt Copies sold:",sold);
    }
}





var obj = new Library()
obj.findBook("book_name")
obj.filterBook()
