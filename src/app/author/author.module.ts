import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorService} from './author.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [AuthorListComponent],
    providers: [AuthorService],
    exports: [AuthorListComponent]
})
export class AuthorModule {}
