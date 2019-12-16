import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private url: string;

  constructor(public router: Router, public authenticationService: AuthenticationService) {
    this.url = `${environment.serverUrl}`;

   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('access_token');
    let request = req;
    if (!req.headers.get('Authorization') && !(req.url === `${this.url}/letters` && req.method === 'POST')) {
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
      this.authenticationService.logout();
    } else if (error.status === 403) {
      let principal: any;
      principal = JSON.parse(localStorage.getItem('principal'));
      this.router.navigate([`${principal.personRole.split('_')[1].toLowerCase()}`]);
    }
  }
}
