import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Letter } from 'src/app/shared/models/letter.model';
import { LetterService } from 'src/app/shared/services/letter.service';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  subcription: Subscription;
  letter: FormGroup;
  letterSelected: string;

  @ViewChild(MatPaginator, {
    static: true,
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  constructor(
    public letterService: LetterService,
    public popupService: PopUpService,
    public formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) {
    this.displayedColumns = ['id', 'date', 'status', 'priority'];
    this.letter = formBuilder.group({
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    let ableLetters: any[];
    this.letterService.getLetterByResponsableId().subscribe((letters: any) => {
      ableLetters = this.selectAbleLetters(letters._embedded.letters);
      this.dataSource = new MatTableDataSource(ableLetters);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (ableLetters) {

        this.letter.get('message').setValue(ableLetters[0].message);
        this.letterSelected = ableLetters[0]._links.letter.href.split('/')[4];
      }
    }, () => {
      this.popupService.showError('Algo fallo al cargar las cartas, recarga la pagina por favor.');
    });
  }

  parsePriority(priority: string) {
    if (priority === 'LOW_PRIORITY') {
      return 'PRIORIDAD BAJA';
    } else if (priority === 'HIGH_PRIORITY') {
      return 'PRIORIDAD ALTA';
    }
    return 'PRIORIDAD MEDIA';
  }

  selectLetter(letter: any) {
    this.letter.get('message').setValue(letter.message);
    this.letterSelected = letter._links.letter.href.split('/')[4];

    if (letter.status === 'NEW') {
      letter.status = 'READ';
      this.letterService.updateLetter(letter.id, letter).subscribe();
    }
  }

  periodIsSelected(letter: any) {
    if (letter.message === this.letter.get('message').value) {
      return 'selected';
    }
  }

  filterWithRedactorLetters() {
    this.dataSource.data = [];
    this.letter.get('message').setValue('');
  }

  responseLetter() {
    this.router.navigate(['/redactor', 'letter-response', this.letterSelected]);
  }

  redactorIsAbleToRespond(letter: any) {
    return letter.status !== 'REPLIED' && letter.status !== 'PRINTED';
  }

  selectAbleLetters(letters: any[]) {
    return letters.filter(letter => {
      if (this.redactorIsAbleToRespond(letter)) {
        return letter;
      }
    });
  }
}
