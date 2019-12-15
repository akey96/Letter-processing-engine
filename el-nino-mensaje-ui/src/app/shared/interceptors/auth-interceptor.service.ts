import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('access_token');
    let request = req;
    if (req.url !== 'http://localhost:8080/oauth/token' && req.url !== 'http://localhost:8080/oauth/check_token') {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(catchError(error => {
      this.handlerAuthError(error);
      return throwError(error.status);
    }));
  }

  private handlerAuthError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['']);
    } else if (error.status === 403) {
      let principal: any;
      principal = JSON.parse(localStorage.getItem('principal'));
      this.router.navigate([`${principal.personRole().split('_')[1].toLowerCase()}`]);
    }
  }
}
