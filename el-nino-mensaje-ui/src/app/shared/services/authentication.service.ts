import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;
  oauthClient: string;
  oauthSecret: string;

  constructor(public httpClient: HttpClient, public router: Router) {
    this.url = `${environment.serverUrl}/oauth`;
    this.oauthClient = environment.oauthClientId;
    this.oauthSecret = environment.oauthSecret;
  }

  login(credentials: any) {
    let headers: HttpHeaders;
    let formData = new HttpParams();
    headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
           .set('Authorization', 'Basic ' + btoa(`${this.oauthClient}:${this.oauthSecret}`));
    formData = formData.set('username', credentials.username.toLowerCase())
                       .set('password', credentials.password)
                       .set('grant_type', 'password');
    return this.httpClient.post(`${this.url}/token`, formData,
    {
      headers
    });
  }

  checkToken(token: string) {
    let headers: HttpHeaders;
    let formData = new HttpParams();
    formData = formData.set('token', token);
    headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
           .set('Authorization', 'Basic ' + btoa(`${this.oauthClient}:${this.oauthSecret}`));
    return this.httpClient.post(`${this.url}/check_token`, formData,
    {
      headers
    });
  }

  getPrincipal() {
    return JSON.parse(localStorage.getItem('principal'));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('principal');
    this.router.navigate(['/login']);
  }
}
