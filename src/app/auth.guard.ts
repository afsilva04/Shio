import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './pages/user/user.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs/operator/retry';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.user.isLoggedIn()){
      return true;
    } 
    
    this.router.navigate(['/login']);
    return false;
  }
}
