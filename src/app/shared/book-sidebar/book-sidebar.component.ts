import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../book/book';

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
    constructor() { }

    /**
    * The method which initializes the component
    */
    ngOnInit() { }

}
