import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;

  constructor(public httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/oauth`;
  }

  login(credentials: any) {
    let headers: HttpHeaders;
    headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa('nimeclient:nmsecret'));
    return this.httpClient.post(`${this.url}/token`, {
      username: credentials.username,
      password: credentials.password,
      grant_type: 'password'
    },
    {
      headers
    });
  }

  checkToken(token: string) {
    let headers: HttpHeaders;
    headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa('nimeclient:nmsecret'));
    return this.httpClient.post(`${this.url}/check_token`, {
      token
    },
    {
      headers
    });
  }

  getPrincipal() {
    return JSON.parse(localStorage.getItem('principal'));
  }
}
