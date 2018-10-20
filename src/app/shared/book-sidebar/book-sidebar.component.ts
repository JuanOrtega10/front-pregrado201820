import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../book/book';
import { BookService } from '../../book/book.service';
@Component({
    selector: 'app-book-sidebar',
    templateUrl: './book-sidebar.component.html',
    styleUrls: ['./book-sidebar.component.css']
})
export class BookSidebarComponent implements OnInit {

    /**
    * The list of books in the BookStore
    */
    @Input() books: Book[];

    /**
    * The component's constructor
    */
    constructor(private bookService: BookService) {  }
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
    if (this.books == null) {
     this.getBooks();
  
    }
    }
}
