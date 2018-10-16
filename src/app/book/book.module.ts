import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {BookService} from './book.service';
import {BookListComponent} from './book-list/book-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        BookListComponent
    ],
    providers: [BookService],
    bootstrap: [BookListComponent]
})
export class BookModule {}
