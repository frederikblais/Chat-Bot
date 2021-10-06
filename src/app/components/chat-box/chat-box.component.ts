import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  chatsArray: any[] = [];
  userTextInput: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.chats.subscribe((chats) => {
      this.chatsArray = chats;
    });
  }

  onClickAddNewChat() {
    //console.log(this.userTextInput)
    this.chatService.addNewChat(this.userTextInput);

  }
}
