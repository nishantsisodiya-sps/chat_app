import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public url = 'http://localhost:9001/message/groups'
  constructor(public http : HttpClient) { }


  GetAllGroups(id : string):Observable<any>{
    return this.http.get(`${this.url}/user/${id}`)
  }

}
