import { Component, OnInit } from '@angular/core';
import { LetterService } from 'src/app/shared/services/letter.service';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/services/content.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  subcription: Subscription;
  letters: any[];
  lettersLink: string[];
  redactor: any;
  content: any;
  contentForm: FormGroup;
  contentSelected: number;
  isAnswered: boolean;

  constructor(
    public letterService: LetterService,
    public contentService: ContentService,
    public userService: UserService,
    public popupService: PopUpService,
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    this.contentForm = formBuilder.group({
      id: new FormControl(''),
      description: new FormControl('', Validators.required),
      creation_date: new FormControl('', Validators.required),
      letters: new FormControl(''),
    });

  }

  ngOnInit() {
    this.isAnswered = false;

    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.contentSelected = parseInt(params.get('id'));
        this.letterService.getLetterByContentId(this.contentSelected).subscribe((letterResponse: any) => {
          this.letters = letterResponse._embedded.letters;

          this.userService.getPersonByContentId(this.contentSelected).subscribe((userResponse) => {
            this.redactor = userResponse;
          })

          this.contentService.getContentById(this.contentSelected).subscribe((contentResponse: any) => {

            this.content = contentResponse;
            this.contentForm.get('description').setValue(this.content.description);

          }, (err) => {
            this.popupService.showError('Algo fallo al cargar las cartas, recarga la pagina por favor.');
          });

        }, (err) => {
          this.popupService.showError('Algo fallo al cargar las cartas, recarga la pagina por favor.');
        });


      }
    });

  }

  enableAnswers() {
    this.isAnswered = !this.isAnswered;

  }

  back() {
    this.router.navigate(['/editor', 'content-list']);
  }

}
