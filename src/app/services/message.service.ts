import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public url = 'http://localhost:9001/message/messages'

  constructor(private http : HttpClient) { }


  getMessages(id:string):Observable<any>{
    return this.http.get(`${this.url}/user/${id}`)
  }

}
