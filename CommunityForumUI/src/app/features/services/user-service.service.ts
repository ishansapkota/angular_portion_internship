import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/LoginRegisterDTO.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
  
  registerUsers(model:LoginDTO) : Observable<void>
  {
    return this.http.post<void>('https://localhost:7255/api/User/register-user',model);
  }

  loginUser(model:LoginDTO) : Observable<string>
  {
    return this.http.post<string>('https://localhost:7255/api/User/login',model)
  }

  setToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('jwtToken', token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  deleteToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('jwtToken');
    }
  }

  logoutUser():void{
    this.deleteToken();
  }

}
