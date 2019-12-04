import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({   
  providedIn: 'root'
})
export class ProfileService {

  url: string;

  constructor(public httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/profiles`;
  }

  getProfiles() {
    return this.httpClient.get < any[] > (this.url);
  }
  getProfileId(id: string) {
    let urlId = `${this.url}/${id}`;
    return this.httpClient.get < any > (urlId);
  }
}
