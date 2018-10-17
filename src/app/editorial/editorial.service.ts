import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Editorial } from './editorial';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const editorials = '/editorials';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class EditorialService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getEditorials(): Observable<Editorial[]> {
        return this.http.get<Editorial[]>(API_URL + editorials).catch(err => this.handleError(err));
    }

    /**
     * The method which handles the errors generated by the requests
     * @param error The error which the API REST returned
     */
    private handleError(error: any) { 
        return throwError(error.error.errorMessage);
    }
}
