import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  showFiller = false;
  goto(path: string) {}
  //logout() {

  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
    // Optionally, you can navigate to the login page after logout
    // this.router.navigate(['/login']);
  }
}
