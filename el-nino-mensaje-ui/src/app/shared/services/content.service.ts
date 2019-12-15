import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Content } from '../models/content.model';

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

  getContentByPersonId(personId: number){
    const url = `${environment.serverUrl}/contents/search/findByPersonId?personId=${personId}`;
    return this.httpClient.get(url);
  }

  getContentById(contetId: number){
    const url = `${environment.serverUrl}/contents/${contetId}`;
    return this.httpClient.get(url);
  }

  createContent(personId: number, content: Content){
    const url = `${environment.serverUrl}/persons/${personId}/content`;
    return this.httpClient.post(url, content);
  }

}
