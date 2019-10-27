import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  LetterService
} from 'src/app/shared/services/letter.service';
import {
  PopUpService
} from 'src/app/shared/services/pop-up.service';

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.component.html',
  styleUrls: ['./write-letter.component.css']
})
export class WriteLetterComponent implements OnInit {
  letter: FormGroup;
  listImages = [];
  constructor(public formBuilder: FormBuilder, public letterService: LetterService, public popUpService: PopUpService) {


    this.letter = formBuilder.group({
      message: new FormControl('', Validators.required),
      images: new FormControl(this.listImages),
      creationDate: new FormControl(new Date()),
      priority: new FormControl('LOW_PRIORITY'),
      status: new FormControl('NEW')
    });
  }

  ngOnInit() {
  }

  cleanMessage() {
    this.letter.get('message').reset();
    this.listImages = [];
  }

  sendMessage() {
    this.letter.value.images = this.listImages;
    console.log(this.letter.value);
    this.letterService.sendLetter(this.letter.value).subscribe(() => {
      this.popUpService.showSuccess('Felicidades tu carta fue mandada exitosamente!');
      this.cleanMessage();
      this.listImages = [];
    }, () => {
      this.popUpService.showError('Ups!! Algo malo paso, intenta mandarnos tu carta nuevamente');
    });
  }

  onFileComplete(data: any) {
    this.listImages.push(data.link)
  }

}
