import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage = '';
  hide = true;
  error=false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      contactNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    console.log('submited', this.registerForm);
  }

  getNameErrorMessage() {
    const nameCtrl = this.registerForm?.get('name');

    if (nameCtrl?.hasError('required')) {
      return 'Name is Required';
    } else {
      return '';
    }
  }

  getContactNumberErrorMessage() {
    const contactCtrl = this.registerForm?.get('contactNumber');

    if (contactCtrl?.hasError('required')) {
      return 'contact is Required';
    } else if (contactCtrl?.hasError('pattern')) {
      return '  Enter a valid 10-digit number';
    } else {
      return '';
    }
  }
  getpasswordErrorMessage() {
    const passwordCtrl = this.registerForm?.get('password');

    if (passwordCtrl?.hasError('required')) {
      return 'PassWord is Required';
    } else if (passwordCtrl?.hasError('minlength')) {
      return 'minimum 8 letters Required';
    } else {
      return ' ';
    }
  }

  getEmailErrorMessage() {
    const emailCtrl = this.registerForm?.get('email');
    if (emailCtrl?.hasError('required')) {
      return 'Email is Required';
    } else if (emailCtrl?.hasError('email')) {
      return 'enter valid email';
    } else {
      return '';
    }
  }

  gotoLogin(): void {
    this.router.navigate(['auth/login']);
  }
}
