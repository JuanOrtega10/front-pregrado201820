import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BookListComponent } from './book-list/book-list.component';
import { BookReviewsListComponent } from './book-reviews-list/book-reviews-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAuthorsListSwapComponent } from './book-authors-list-swap/book-authors-list-swap.component';
import { BookAddReviewComponent } from './book-add-review/book-add-review.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        NgxPaginationModule
    ],
    declarations: [
        BookListComponent, BookDetailComponent,  BookReviewsListComponent, BookCreateComponent, BookAuthorsListSwapComponent, BookAddReviewComponent
    ],
    providers: [BookService],
    exports: [BookListComponent]
})
export class BookModule { }
