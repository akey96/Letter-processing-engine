import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;

  constructor(public httpClient: HttpClient, public router: Router) {
    this.url = `${environment.serverUrl}/oauth`;
  }

  login(credentials: any) {
    let headers: HttpHeaders;
    const formData = new FormData();
    headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa('nimeclient:nmsecret'));
    formData.append('username', credentials.username.toLowerCase());
    formData.append('password', credentials.password);
    formData.append('grant_type', 'password');
    return this.httpClient.post(`${this.url}/token`, formData,
    {
      headers
    });
  }

  checkToken(token: string) {
    let headers: HttpHeaders;
    const formData = new FormData();
    formData.append('token', token);
    headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa('nimeclient:nmsecret'));
    return this.httpClient.post(`${this.url}/check_token`, formData,
    {
      headers
    });
  }

  getPrincipal() {
    return JSON.parse(localStorage.getItem('principal'));
  }

  logout() {
    localStorage.removeItem('acess_token');
    localStorage.removeItem('principal');
    this.router.navigate(['']);
  }
}
