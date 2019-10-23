import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Letter
} from '../models/letter.model';
import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
  url: string;

  constructor(public httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/letters`;
  }

  sendLetter(letter: Letter) {
    return this.httpClient.post(this.url, letter);
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
    console.log(urlId)
    return this.httpClient.patch(urlId, letter);
  }
}
