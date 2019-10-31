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



@Component({
  selector: 'app-letter-response',
  templateUrl: './letter-response.component.html',
  styleUrls: ['./letter-response.component.css']
})
export class LetterResponseComponent implements OnInit {

  subcription: Subscription;
  letter: FormGroup;
  letterSelected: string;
  listImages = [];
  isAnswered: boolean;

  constructor(
    public letterService: LetterService,
    public popupService: PopUpService,
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

      this.letter = formBuilder.group({
        message: new FormControl('', Validators.required),
        response: new FormControl('', Validators.required),
      });
      
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
        }, (err) => {
          this.popupService.showError('Algo fallo al cargar las cartas, recarga la pagina por favor.');
        });
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

  enableAnswers() {
    this.isAnswered = !this.isAnswered;
    
  }

  back() {
    this.router.navigate(['/redactor','letter-list']);
  }
  
}

