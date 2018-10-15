import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthorModule,
    BookModule,
    EditorialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
