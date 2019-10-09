import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Letter
} from 'src/app/shared/models/letter.model';
import {
  LetterService
} from 'src/app/shared/services/letter.service';
import {
  PopUpService
} from 'src/app/shared/services/pop-up.service';
import {
  Subscription
} from 'rxjs';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  MatSort
} from '@angular/material/sort';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  MatPaginator
} from '@angular/material/paginator';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource < Letter > ;
  subcription: Subscription;
  letter: FormGroup;
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  constructor(public letterService: LetterService, public popupService: PopUpService, public formBuilder: FormBuilder) {
    this.displayedColumns = ['date', 'status', 'priority'];
    this.letter = formBuilder.group({
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.letterService.getLetters().subscribe((letters: any) => {
      this.dataSource = new MatTableDataSource(letters._embedded.letters);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if (letters._embedded.letters[0]) {
        this.letter.get('message').setValue(letters._embedded.letters[0].message);
      }
    }, () => {
      this.popupService.showError('Algo fallo al cargar las cartas, recarga la pagina por favor.');
    });
  }

  parsePriority(priority: string) {
    let splitedPriority: string[];
    splitedPriority = priority.split('_');
    return `${splitedPriority[0]} ${splitedPriority[1]}`;
  }

  selectLetter(letter: Letter) {
    this.letter.get('message').setValue(letter.message);
  }
  periodIsSelected(letter: Letter) {
    if (letter.message === this.letter.get('message').value) {
      return 'selected';
    }
  }

  filterWithRedactorLetters() {
    this.dataSource = new MatTableDataSource([]);
    this.letter.get('message').setValue('');
  }
}
