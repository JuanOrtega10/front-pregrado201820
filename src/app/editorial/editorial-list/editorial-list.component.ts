import {Component, OnInit} from '@angular/core';

import {Editorial} from '../editorial';
import {EditorialService} from '../editorial.service';

/**
* The component for the list of editorials in the BookStore
*/
@Component({
    selector: 'app-editorial',
    templateUrl: './editorial-list.component.html',
    styleUrls: ['./editorial-list.component.css']
})
export class EditorialListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param editorialService The author's services provider
    */
    constructor(
        private editorialService: EditorialService,
    ) {}

    /**
    * The list of editorials which belong to the BookStore
    */
    editorials: Editorial[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the editorial being edited.
     */
    editorial_edit_id: number;

    /**
    * Asks the service to update the list of editorials
    */
    getEditorials(): void {
        this.editorialService.getEditorials()
            .subscribe(editorials => {
                this.editorials = editorials;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(editorial_id: number): void {
        if (!this.showEdit || (this.showEdit && editorial_id != this.editorial_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.editorial_edit_id = editorial_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateEditorial(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of editorials from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getEditorials();
    }
}


