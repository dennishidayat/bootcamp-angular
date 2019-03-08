import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router, private authService: AuthService) {

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('Logged In : ');
    console.log(sessionStorage.getItem('admin'))
    if (sessionStorage.getItem('admin')) {
      return true;
    }
    this._router.navigate(['./customer'], { queryParams: { returnUrl: state.url }});
  }
}



