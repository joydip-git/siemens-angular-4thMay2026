import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password-validators';
import { AuthService } from '../../services/auth-service';
import { User } from '../../../../models/user';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private formBuilder = inject(FormBuilder)
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]]
  })
  private currentRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private authSvc = inject(AuthService)

  get username() {
    return this.loginForm.get("username")
  }
  get password() {
    return this.loginForm.get("password")
  }
  submit() {
    if (window.confirm('would you like to submit')) {
      this.authSvc
        .authenticate(this.loginForm.value as User)
        .subscribe({
          next: (resp) => {
            if (resp.data !== null) {
              sessionStorage.setItem('token', resp.data)
            } else {
              window.alert(resp.message)
            }
          },
          error: (err) => {
            window.alert(err.message)
          },
          complete: () => {
            const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot;
            if (snapshot.queryParams['returnUrl']) {
              const url = snapshot.queryParams['returnUrl']
              this.router.navigate([url])
            } else {
              this.router.navigate(['/products'])
            }
          }
        })
    }
  }
}
