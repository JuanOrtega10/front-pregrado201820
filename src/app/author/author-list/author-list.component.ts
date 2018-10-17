import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthorService } from '../author.service';
import { Author } from '../author';

/**
* The author's list component
*/
@Component({
    selector: 'app-author',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
    
    /**
    * Constructor for the component
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authorService: AuthorService,
        private toastrService: ToastrService
    ) { }
    
    /**
    * The list of authors which belong to the BookStore
    */
    authors: Author[];
    
    /**
    * Asks the service to update the list of authors
    */
    getAuthors(): void {
        this.authorService.getAuthors()
        .subscribe(authors => {
            this.authors = authors;
        }, err => {
            this.toastrService.error(err, "Error");
        });
    }
    
    /**
    * This will initialize the component by retrieving the list of authors from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getAuthors();
    }
    
}
