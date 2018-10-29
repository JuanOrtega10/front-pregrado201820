import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AuthorListComponent} from '../author/author-list/author-list.component';
import {BookListComponent} from '../book/book-list/book-list.component';
import {EditorialListComponent} from '../editorial/editorial-list/editorial-list.component';
import { AuthorDetailComponent } from '../author/author-detail/author-detail.component';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';
import { EditorialDetailComponent } from '../editorial/editorial-detail/editorial-detail.component';
import { BookCreateComponent } from '../book/book-create/book-create.component';

const routes: Routes = [

    {
        path: 'books',
        children: [
           {
                path: 'list',
                component: BookListComponent 
            },
            {
                path: 'add',
                component: BookCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: BookDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'authors',
        children: [
            {
                path: 'list',
                component: AuthorListComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: AuthorDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'editorials',
        children: [
            {
                path: 'list',
                component: EditorialListComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: EditorialDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
     {
         path: 'home',
         component: BookListComponent
    },
    {
         path: '**',    
         redirectTo: 'home',    
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
