import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterRes } from 'src/app/models/interface/IRegister';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorHide = true;
  errorMessage = '';
  hide = true;
  error = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
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
    // console.log('submited', this.registerForm);
    if (this.registerForm.valid) {
      this.errorHide = true;
      //api call

      this.authService.register(this.registerForm.value).subscribe(
        (response: IRegisterRes) => {
          alert(response.message);
          this.gotoLogin();
        },
        (error) => {
          console.log('Register Failed', error);
          this.errorHide = false;
          this.errorMessage = error.error.message;
          console.log(this.errorHide);
        }
      );
    }
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
