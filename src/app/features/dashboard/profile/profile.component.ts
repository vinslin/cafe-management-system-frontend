import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string | null = null;
  email: string | null = null;
  role: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userDetails = this.authService.userDetais();
    if (userDetails) {
      this.name = userDetails.name;
      this.email = userDetails.email;
      this.role = userDetails.role;
    } else {
      console.error('No user details found or token is invalid.');
    }
  }
}
