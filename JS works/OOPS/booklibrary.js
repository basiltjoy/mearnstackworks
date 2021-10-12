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
        for (let book in this.books) {
            var x = this.books.halfgirlfriend.copies_sold  //100
            var y = this.books.things.copies_sold            //80
            var z = this.books.thealchemist.copies_sold      //500
            var arr = []
            arr = [x, y, z]
            arr.sort((a,b)=>a-b)
            console.log("Copies sold:",arr);
            break;
        }
    }

}



var obj = new Library()
 obj.findBook("book_name")
 obj.filterBook()
