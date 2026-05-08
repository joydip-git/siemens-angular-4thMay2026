import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  private router = inject(Router)
  private tokenSvc = inject(TokenStorageService)
  isLoggedin = signal(false)

  ngOnInit(): void {
    this.tokenSvc.store.subscribe({
      next: (resp) => {
        if (resp !== null) {
          this.isLoggedin.set(true)
        } else {
          this.isLoggedin.set(false)
        }
      }
    })
  }
  navigate(e: Event) {
    e.preventDefault()
    if (this.isLoggedin()) {
      this.tokenSvc.removeToken()      
    }
    this.router.navigate(['/login'])
  }
}
