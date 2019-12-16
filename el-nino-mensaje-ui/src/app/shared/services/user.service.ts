import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(public httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/persons`;
  }

  sendUser(user: User) {
    return this.httpClient.post(this.url, user);
  }

  getUserByUsername(username: any) {
    return this.httpClient.get(`${this.url}/search/findByUsername?username=${username}`);
  }

  getPersonByContentId(contentId) {
    return this.httpClient.get(`${environment.serverUrl}/contents/${contentId}/person`);
  }

}
