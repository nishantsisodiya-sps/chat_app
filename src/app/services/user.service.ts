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

    updateProfile(id : string , data : any):Observable<any>{
      return this.http.post(`${this.url}/profile/${id}` ,data)
    }

    updateUserData(id: string , data : any):Observable<any>{
      return this.http.put(`${this.url}/${id}` ,data)
    }

}
