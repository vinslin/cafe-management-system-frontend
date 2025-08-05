import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  showFiller = false;
  goto(path: string) {
    if (path === 'Dashboard') {
      path = '';
    }
    this.router.navigate(['/dashboard', path]);
  }
  //logout() {

  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout();
    // Optionally, you can navigate to the login page after logout
    this.router.navigate(['/auth/login']);
  }
}

// D:\cafe-management-frontend\cafe-management-app-frontend\src\app\services\authentication\auth.service.ts
