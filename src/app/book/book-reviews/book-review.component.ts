import { Component, OnInit, Input, } from '@angular/core';
import { BookService } from '../book.service';
import { Review } from '../review';

@Component({
    selector: 'app-book-reviews',
    templateUrl: './book-review.component.html',
})
export class BookReviewComponent implements OnInit {
    @Input() bookReviews : Review [];
    public isCollapsed = true;
    
    ngOnInit(){
        
    }
}



