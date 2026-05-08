import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password-validators';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  private formBuilder = inject(FormBuilder)
  registrationForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]]
  })

  get username() {
    return this.registrationForm.get("username")
  }
  get password() {
    return this.registrationForm.get("password")
  }
  submit() {
    if (window.confirm('would you like to submit')) {
      console.log(this.registrationForm.value);
    }
  }
}
