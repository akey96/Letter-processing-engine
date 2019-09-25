import {
  Injectable
} from '@angular/core';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(public snackBar: MatSnackBar) {}

  showError(arg0: string) {
    this.snackBar.open(arg0, '', {
      duration: 10000,
      panelClass: ['error']
    });
  }
  showSuccess(arg0: string) {
    this.snackBar.open(arg0, '', {
      duration: 10000,
      panelClass: ['accept']
    });
  }

}
