import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Author} from './author';

const API_URL = "../../assets/";
const authors = '/authors.json';

/**
 * The service provider for everything related to authors
 */
@Injectable()
export class AuthorService {

    /**
     * Constructor of the service
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns the Observable object containing the list of authors retrieved from the API
     * @returns The list of authors in real time
     */
    getAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>(API_URL + authors);
    }
}
