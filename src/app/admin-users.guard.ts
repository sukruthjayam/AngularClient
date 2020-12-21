import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTokenService } from './jwtoken.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersGuard implements CanActivate {
  constructor(private token: JWTokenService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.token.getIsAuthenticated() && this.token.getUserType()==='admin'){
      return true;
    }
    else{
      this.token.resetToken();
      this.router.navigateByUrl('/login');
    }
  }
  
}
