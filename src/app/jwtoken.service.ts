import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTokenService {
 isAuthenticated=false;
  constructor() { 
    window.localStorage.setItem('isAuthenticated', 'false');
  }
  saveToken(token: any) {
   this.isAuthenticated=true;
    window.localStorage.setItem('username', token.username);
    window.localStorage.setItem('userType', token.userType);
    window.localStorage.setItem('token', token.jwt);
  }

  resetToken() {
    window.localStorage.removeItem('isAuthenticated');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userType');
    window.localStorage.removeItem('token');
  }
  getIsAuthenticated() {
   
    return window.localStorage.getItem('isAuthenticated') === 'yes';
  }
  getUserName() {
    return window.localStorage.getItem('username');
  }

  getUserType() {
    return window.localStorage.getItem('userType');
  }

  getToken() {
    return window.localStorage.getItem('token');
  }
}
