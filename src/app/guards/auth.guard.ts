import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = localStorage.getItem('token');
    const expiredAt = Number(localStorage.getItem('expired_at'));

    if (!token || Date.now() >= expiredAt * 1000) {
      this.authService.logout();
      console.error('Token is invalid or expired.');
      return this.router.parseUrl('/auth/login');
    }
    return true;
  }
}
