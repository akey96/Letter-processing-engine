import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Letter } from 'src/app/shared/models/letter.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContentService } from 'src/app/shared/services/content.service';
import { PopUpService} from 'src/app/shared/services/pop-up.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource <Letter> ;
  subcription: Subscription;
  content: FormGroup;
  contentSelected: string;

  @ViewChild(MatPaginator, {
    static: true,
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: true
  }) sort: MatSort;

  constructor(public contentService: ContentService, public popUpService: PopUpService,
              public formBuilder: FormBuilder, public router: Router) {
    this.displayedColumns = ['id', 'description', 'creationDate'];
    this.content = formBuilder.group({
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.contentService.getContents().subscribe((contents: any) => {
      this.dataSource = new MatTableDataSource(contents._embedded.contents);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (contents._embedded.contents[0]) {
        this.content.get('content').setValue(contents._embedded.contents[0].content);
        this.contentSelected = contents.id;
      }
    }, () => {
      this.popUpService.showError('Algo fallo al cargar las respuestas de los redactores, recarga la pagina por favor.');
    });
  }

  selectContent(content: any) {
    this.content.get('content').setValue(content.content);
    this.contentSelected = content.id;
  }

  contentIsSelected(content: any) {
    if (content.content === this.content.get('content').value) {
      return 'selected';
    }
  }
  viewContent() {
    this.router.navigate(['/editor', '/content/', this.contentSelected]);
  }

  rejectContent() {
    this.dataSource.data = [];
    this.content.get('content').setValue('');
  }
}
