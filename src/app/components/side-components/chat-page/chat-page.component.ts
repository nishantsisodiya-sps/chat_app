import { Component, OnInit } from '@angular/core';
import { messages } from 'src/app/interfaces/profileInterface';
import { MessageService } from 'src/app/services/message.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  allMessages : messages[] = []
  constructor(
    private message : MessageService,
    private token : TokenService
    ) { }

  ngOnInit(): void {
    this.getMessages()
  }


  getMessages(){
    let id = this.token.getUserId().id

    this.message.getMessages(id).subscribe(res=>{
      this.allMessages = res
      console.log(this.allMessages);
    })

  }

}
