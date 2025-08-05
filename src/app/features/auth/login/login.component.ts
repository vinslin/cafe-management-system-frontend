import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRes } from 'src/app/models/interface/ILogin';
import { AuthService } from 'src/app/services/authentication/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;
  errorHide = true;
  errorMessage = 'hi hello';
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
          //   console.log(response);

          if (this.storeToken(response.token)) {
            this.router.navigate(['dashboard']);
            console.log('redirected');
          }
        },
        (error) => {
          console.log('Login Failed', error);
          this.errorHide = false;
          this.errorMessage = error.error.message;
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
