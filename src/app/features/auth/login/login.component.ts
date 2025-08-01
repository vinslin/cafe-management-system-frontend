import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRes, ILoginReturn } from 'src/app/models/interface/ILogin';
import { AuthService } from 'src/app/services/authentication/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;
  errorhide = false;
  errorMessage = '';
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public storeToken(token: string): boolean {
    console.log('mudiyala');
    return this.authService.storeLoginCredentials(token);
  }

  onSubmit() {
    //   console.log('form generated', this.loginForm.value);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: ILoginRes) => {
          console.log(response);
          if (response.statusCode === 400 || response.statusCode === 401) {
            // this.router.navigate['dashboard/firstpage'];
            this.errorhide = true;
            this.errorMessage = response.message;
          } else if (response.statusCode === 200) {
            if (this.storeToken(response.token)) {
              // this.router.navigate(['dashboard']);
              console.log('redirected');
            }
          }
        },
        (error) => {
          console.log('Login Failed', error);
        }
      );
    }
  }

  gotoSignup(): void {
    console.log('hi');
    this.router.navigate(['auth/register']);
  }

  getErrorMessage() {
    const emailCtrl = this.loginForm?.get('email');
    if (emailCtrl?.hasError('required')) {
      return 'Email is Required';
    } else if (emailCtrl?.hasError('email')) {
      return 'enter valid email';
    } else {
      return '';
    }
  }
  getpasswordErrorMessage() {
    const passwordCtrl = this.loginForm?.get('password');

    if (passwordCtrl?.hasError('required')) {
      return 'PassWord is Required';
    } else if (passwordCtrl?.hasError('minlength')) {
      return 'minimum 8 letters Required';
    } else {
      return ' ';
    }
  }
}
