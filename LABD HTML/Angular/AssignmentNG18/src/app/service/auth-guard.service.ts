import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if 'loggedIn' session flag exists and is 'yes'
    if (sessionStorage.getItem('loggedIn') === 'yes') {
      return true; // Allow access if logged in
    } else {
      // Redirect to login page if not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}
