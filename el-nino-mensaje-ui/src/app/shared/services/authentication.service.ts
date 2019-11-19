import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post(`${this.url}/access_token`, credentials);
  }

  checkToken(token: string) {
    return this.httpClient.post(`${this.url}/check_token`, token);
  }

  getPrincipal() {
    return JSON.parse(localStorage.getItem('principal'));
  }
}
