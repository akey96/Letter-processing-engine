import {
  Component,
  OnInit,
} from '@angular/core';
import { Letter } from 'src/app/shared/models/letter.model';
import { LetterService } from 'src/app/shared/services/letter.service';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { Subscription } from 'rxjs';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogContent } from './dialog-content/dialog-content';


@Component({
  selector: 'app-letter-response',
  templateUrl: './letter-response.component.html',
  styleUrls: ['./letter-response.component.css']
})
export class LetterResponseComponent implements OnInit {

  user: any;
  subcription: Subscription;
  letters: String [];
  letter: FormGroup;
  letterSelected: string;
  listImages = [];
  isAnswered: boolean;
  letter_status: string;
  constructor(
    public dialog: MatDialog,
    public letterService: LetterService,
    public popupService: PopUpService,
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

      this.letter = formBuilder.group({
        message: new FormControl('', Validators.required),
        response: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required),
        creationDate: new FormControl('', Validators.required),
        priority: new FormControl('', Validators.required),
        
      });

    console.log(this.letter);
      
  }

  ngOnInit() {
    this.isAnswered = false;
 
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.letterSelected = params.get('id');
        this.letterService.getLettersId(this.letterSelected).subscribe((letter: any) => {
          this.listImages = letter.images;
          this.letter.get('message').setValue(letter.message);
          this.letter.get('response').setValue(letter.response);
          this.letter.get('status').setValue(letter.status);
          this.letter.get('creationDate').setValue(letter.creationDate);
          this.letter.get('priority').setValue(letter.priority);
          
          if(letter.priority === 'LOW_PRIORITY') {
            this.letter_status = 'prioridad baja';
          } else if(letter.priority === 'MEDIUM_PRIORITY') {
            this.letter_status = 'prioridad media';
          } else {
            this.letter_status = 'prioridad alta';
          } 
        }, (err) => {
          this.popupService.showError('Algo fallo al cargar las cartas, recarga la pagina por favor.');
        });

        // harcode user
        this.user = {
          id: 13,
          name: '2001-01-01 00:00:00',
          birthday: Date.now(),
          primaryEmail: 'pepito@gmail.com',
        };
      }
    });
  }


  responseLetter(){
    this.letterService.updateLetter(this.letterSelected, this.letter.value).subscribe((resp) => {
      this.popupService.showSuccess('Tu respuesta fue guardada exitosamente');
      this.router.navigate(['/redactor','letter-list']);
    }, (error) => {
      this.popupService.showError('NO SE PUDO GUARDAR TU RESPUESTA, POR FAVOR INTENTA GUARDARLA NUEVAMENTE');
    });
    console.log(this.letter.value);
  }
  cleanMessage() {
    this.letter.get('message').reset();
    this.letter.get('response').reset();
  }
  

  openDialog(): void {
    
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        
        const letterId = parseInt(params.get('id'));
        const personId = this.user.id;

        const dialogRef = this.dialog.open(DialogContent, {
          width: '600px',
          data: {personId, letterId }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });

      }
    });
    
  }

  hidenDialog() {
    this.dialog.closeAll();
  }

  enableAnswers() {
    this.isAnswered = !this.isAnswered;
    
  }

  back() {
    this.router.navigate(['/redactor','letter-list']);
  }
  
}

