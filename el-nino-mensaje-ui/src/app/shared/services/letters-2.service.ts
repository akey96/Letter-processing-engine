import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Letter } from '../models/letter.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Letters2Service {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.serverUrl}/letters-2`;
  }

  public updateLetterStatusToRead(letterId: number): Observable<Letter> {
    const updateUrl = `${this.url}/${letterId}/status/read`;
    return this.httpClient.put<Letter>(updateUrl, null);
  }



  /*public listar(): Observable<Letter[]> 
  {
    return this.httpClient.get(this.url).pipe(
      map(data => data as Letter[])
    );
  }*/

}
