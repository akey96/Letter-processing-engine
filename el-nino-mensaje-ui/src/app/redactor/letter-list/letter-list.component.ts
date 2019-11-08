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
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Router} from '@angular/router';
import { Letters2Service } from 'src/app/shared/services/letters-2.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Params, ChildrenOutletContexts } from '@angular/router';


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
  letterSelected: string;

  @ViewChild(MatPaginator, {
    static: true,
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  constructor(
    public letterService: LetterService, 
    public letter2Service: Letters2Service,
    public popupService: PopUpService, 
    public formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) {
    this.displayedColumns = ['id','date', 'status', 'priority'];
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
        this.letterSelected = letters._embedded.letters[0]['_links'].letter.href.split('/')[4];
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
    this.letterSelected = letter['_links'].letter.href.split('/')[4];

    this.letter2Service.updateLetterStatusToRead(letter.id).pipe(take(1)).subscribe((letterResponse: Letter) => {
      this.dataSource.data = this.dataSource.data.map(letterDataSource => {
        if (letterResponse.id === letterDataSource.id) {
          return letterResponse;
        } else {
          return letterDataSource;
        }
      });
    }, () => {
          console.log('error', letter);
        });
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
  
  responseLetter(){
    this.router.navigate(['/redactor','letter-response',this.letterSelected]);

  }
}
