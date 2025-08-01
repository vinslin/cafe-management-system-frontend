import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    console.log('form generated', this.loginForm);
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
