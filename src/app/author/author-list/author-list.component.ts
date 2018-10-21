import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthorService } from '../author.service';
import { Author } from '../author';
import { AuthorDetail } from '../author-detail';

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
        private authorService: AuthorService) { }

    /**
    * The list of authors which belong to the BookStore
    */
    authors: Author[];
    author_id: number;
    selectedAuthor : Author;
    
    onSelected(author_id: number):void {
        this.author_id = author_id;
        this.selectedAuthor = new AuthorDetail();
        this.getAuthorDetail();

        
    }
    /**
    * Asks the service to update the list of authors
    */
    getAuthors(): void {
        this.authorService.getAuthors()
            .subscribe(authors => {
                this.authors = authors;
            });
    }

      getAuthorDetail(): void {
        this.authorService.getAuthorDetail(this.author_id)
            .subscribe(selectedAuthor => {
                this.selectedAuthor = selectedAuthor
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