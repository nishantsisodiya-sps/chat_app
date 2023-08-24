import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url = 'http://localhost:9001/user';

  constructor(
              private http : HttpClient
  ) { }


    getUsers():Observable<any>{
      return this.http.get(`${this.url}/users`)
    }

}
