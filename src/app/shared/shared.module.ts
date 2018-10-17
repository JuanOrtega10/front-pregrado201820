import { BookSidebarComponent } from './book-sidebar/book-sidebar.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
     ],
    declarations: [
        BookSidebarComponent
    ],
    exports: [
        BookSidebarComponent
    ]
})
  
export class SharedModule {}