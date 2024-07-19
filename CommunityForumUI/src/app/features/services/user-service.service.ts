import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/LoginRegisterDTO.model';
import { Observable } from 'rxjs/internal/Observable';
import { jwtDecode } from 'jwt-decode';
import { TokenDataDTO } from '../models/TokenDataDTO.model';
import { decode } from 'punycode';

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

  loginUser(model:LoginDTO) : Observable<{result: string}>
  {
    return this.http.post<{result:string}>('https://localhost:7255/api/User/login',model)
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

  getUserInfo(): TokenDataDTO | null{
    const token = this.getToken();
    if (token)
      {
        const decoded:any = jwtDecode(token);
        console.log(decoded)
        return{
          username:decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
          email : decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
          role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
          id:decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/serialnumber']
        };
      }
      return null;
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

