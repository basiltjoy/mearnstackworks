class booklibrary {
    addtodb() {
        let b_name = bk_name.value;
        let b_author = bk_author.value;
        let b_amount = bk_amt.value;
        let b_sold = c_sold.value;
        let b_avail = c_avail.value;
        var book_details = {
            b_name, b_author, b_amount, b_sold, b_avail
        }
        localStorage.setItem(book_details.b_name, JSON.stringify(book_details))
        swal("Submitted!", "Book added to database!", "success");
       // alert("book created")
       // location.href = "./index.html"

    }

    validateBook(bookname) {
        return bookname in localStorage ? true : false
    }

    findBook() {
        let bk_name = bookname.value;
        let b_details =JSON.parse(localStorage.getItem(bk_name)) 
        document.querySelector("#book").innerHTML=`Book Name:${b_details.b_name} `
        document.querySelector("#book1").innerHTML=`Author Name:${b_details.b_author} `
        document.querySelector("#book2").innerHTML=`Book Price:${b_details.b_amount} `
        document.querySelector("#book3").innerHTML=`Books Sold:${b_details.b_sold} `
        document.querySelector("#book4").innerHTML=`Available Stock:${b_details.b_avail} `
        swal("enjoy the book!", "You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.!", "success");
      
    }


}

var book1 = new booklibrary()
book1.addtodb

