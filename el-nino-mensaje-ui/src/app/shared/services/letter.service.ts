import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Letter} from '../models/letter.model';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
    url: string;

    constructor(public httpClient: HttpClient, public authService: AuthenticationService) {
      this.url = `${environment.serverUrl}/letters`;
    }

  sendLetter(letter: Letter) {
    return this.httpClient.post(this.url, letter);
  }


  getContentById(letterId) {
    let urlId = `${this.url}/${letterId}/content`;
    return this.httpClient.get(urlId);

  }

  getLetters() {
    return this.httpClient.get < Letter[] > (this.url);
  }

  getLettersId(id: string) {
    let urlId = `${this.url}/${id}`;
    return this.httpClient.get < Letter > (urlId);
  }

  updateLetter(id: string, letter: Letter ) {
    let urlId = `${this.url}/${id}`;
    return this.httpClient.patch(urlId, letter);
  }

  updateLetterStatusToRead(letterId: number): Observable<Letter> {

    const updateUrl = `${environment.serverUrl}/letters-2/${letterId}/status/read`;
    return this.httpClient.put<Letter>(updateUrl, null);
  }

  getLetterByContentId(contentId: number) {
    const url = `${environment.serverUrl}/letters/search/findByContentId?contentId=${contentId}`;

    return this.httpClient.get(url);
  }

  getLetterByResponsableId() {
    const responsableId = this.authService.getPrincipal().id;
    const url = `${this.url}/search/findByResponsableId?responsableId=${responsableId}`;
    return this.httpClient.get(url);
  }
}
