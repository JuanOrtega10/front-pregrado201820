import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Editorial } from '../editorial';
import { EditorialService } from '../editorial.service';

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
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private editorialService: EditorialService,
        private toastrService: ToastrService
    ) { }

    /**
    * The list of editorials which belong to the BookStore
    */
    editorials: Editorial[];

    /**
    * Asks the service to update the list of editorials
    */
    getEditorials(): void {
        this.editorialService.getEditorials()
            .subscribe(editorials => {
                this.editorials = editorials;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * This will initialize the component by retrieving the list of editorials from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getEditorials();
    }
}


