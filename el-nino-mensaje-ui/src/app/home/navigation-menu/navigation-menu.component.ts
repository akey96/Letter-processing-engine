import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute,  Router, UrlSegment } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  [x: string]: any;

  public rutas: any[] = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService

  ) {
  }

  url: string;

  ngOnInit() {
    this.rutaActiva.url.subscribe((urlSegments: UrlSegment[]) => {

      let arregloUrl = this.router.url.split('/').slice(1);
      if (arregloUrl[0]) {
        if (arregloUrl[0] === 'redactor') {
          if (arregloUrl[1]) {
            if (arregloUrl[1] === 'letter-list') {
              this.rutas = [{
                  nombre: 'Lista de cartas recibidas',
                  url: '/redactor/letter-list'
                }];
            } else if (arregloUrl[1] === 'letter-response') {
              this.rutas = [{
                  nombre: 'Carta a responder',
                  url: '/redactor/letter-list'
                }];
            }
          }
        } else if (arregloUrl[0] === 'administrator') {
          this.rutas = [{
            nombre: 'Registro de nuevo personal',
            url: '/administrator/register-user',
          }];
        }
      }
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}




