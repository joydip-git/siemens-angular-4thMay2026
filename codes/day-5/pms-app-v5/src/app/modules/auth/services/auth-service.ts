import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { AUTH_API_URL } from '../../../configs/constants';
import { ApiResponse } from '../../../models/apirespone';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient)

  authenticate(user: User) {
    return this._http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
  }
  register(user: User) {
    return this._http.post<ApiResponse<User>>(`${AUTH_API_URL}/register`, user)
  }
}
