import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {

  constructor(public authenticationService: AuthenticationService, public router: Router) {}

  canActivate() {
    const principal = this.authenticationService.getPrincipal();
    if (principal.personRole === 'ROLE_ADMINISTRATOR' || principal.personRole === 'ROLE_REDACTOR') {
      this.router.navigate([ '/', principal.personRole.split('_')[1].toLowerCase()]);
      return false;
    } else if (!principal) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
