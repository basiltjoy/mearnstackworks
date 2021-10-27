class Booklibrary {
    addtodb() {
        let book_name = bk_name.value;
        let book_author = bk_author.value;
        let book_amount = bk_amt.value;
        let book_sold = c_sold.value;
        let book_avail = c_avail.value
        var book_details = {
            book_name, book_author, book_amount, book_sold, book_avail
        }
       localStorage.setItem(book_details.book_name, JSON.stringify(book_details))
        alert("book created")
        location.href = "./index.html"   
    }
    findBook(){
        
    }
}
var book = new Booklibrary()
book.addtodb
