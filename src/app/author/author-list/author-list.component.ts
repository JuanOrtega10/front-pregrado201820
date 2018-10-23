import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
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

    /**
    * Shows or hides the author-create-component
    */
    showCreate: boolean;
    
    /**
    * The id of the author that the user wants to view
    */
    author_id: number;
    
    /**
     * the author that the user views.
     */
    selectedAuthor : Author;
    
    
    /**
    * Shows the author
    */
    onSelected(author_id: number):void {
        this.showCreate = false;
        this.author_id = author_id;
        this.selectedAuthor = new AuthorDetail();
        this.getAuthorDetail();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedAuthor) {
            this.selectedAuthor = undefined;
            this.author_id = undefined;
        }
        this.showCreate = !this.showCreate;
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
        this.showCreate = false;
        this.selectedAuthor = undefined;
        this.author_id = undefined;
        this.getAuthors();
    }
}