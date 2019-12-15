import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url: string;

  constructor(public httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/contents`;
  }

  getContents() {
    return this.httpClient.get(this.url);
  }
}
