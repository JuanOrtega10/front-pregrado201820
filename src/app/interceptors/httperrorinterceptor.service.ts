import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    
    constructor (private toastrService: ToastrService){ }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errMsg = '';
                    // Client Side Error
                    if (error.error instanceof ErrorEvent) {
                        errMsg = `Error: ${error.error.message}`;
                        this.toastrService.error(errMsg, 'Major Error');
                    }
                    else {  // Server Side Error
                        errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                        this.toastrService.error(errMsg, 'Major Error');
                    }
                    
                    console.log(errMsg);
                    return throwError(errMsg);
                })
            )
    }
}   