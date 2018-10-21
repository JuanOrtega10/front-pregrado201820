import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthorService } from './author.service';
import { AuthorListComponent } from './author-list/author-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { BookModule } from '../book/book.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        BookModule
    ],
    declarations: [
        AuthorListComponent, AuthorDetailComponent
    ],
    providers: [AuthorService],
    bootstrap: [AuthorListComponent]
})
export class AuthorModule { }
