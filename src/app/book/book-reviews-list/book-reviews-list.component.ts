import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BookService} from '../book.service';
import {Review} from '../review';
import {Book} from '../book';

@Component({
    selector: 'app-book-reviews',
    templateUrl: './book-reviews-list.component.html',
    styleUrls: ['./book-reviews-list.component.css']
})
export class BookReviewsListComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
     */
    constructor(
        private bookService: BookService
    ) {}

    /**
    * The list of reviews of the book
    */
    reviews: Review[];

    /**
    * The id of the book whose reviews we want to show
    * This attribute is set by the parent component
    */
    @Input() book: Book;

    /**
    * The page (controls pagination)
    */
    page: number;

    public isCollapsed = true;

    /**
    * The function which obtains the reviews of the book
    */
    getReviews(): void {
        this.bookService.getReviews(this.book.id)
            .subscribe(reviews => this.reviews = reviews);
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.reviews = [];
        this.page = 1;
        if (this.book != undefined) {
            this.getReviews();
        }
        console.log(this.reviews);
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges(changes: SimpleChanges) {
        if (changes['book']) {
            this.ngOnInit();
        }
    }
}
