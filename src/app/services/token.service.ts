import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public decodedToken: any;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.decodedToken = jwtDecode(token);
    }
  }

  getUserId() {
    if (this.decodedToken) {
      return this.decodedToken;
    }
    return null;
  }
}
