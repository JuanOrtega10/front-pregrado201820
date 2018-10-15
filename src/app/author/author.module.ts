import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorService} from './author.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AuthorListComponent],
    providers: [AuthorService],
    exports: [AuthorListComponent]
})
export class AuthorModule {}
