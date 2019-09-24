import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  showError(arg0: string) {
    console.log(arg0);
  }
  showSuccess(arg0: string) {
    console.log(arg0);
  }

}
