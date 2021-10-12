import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  chatsArray: any[] = [];
  botChatsArray: any[] = [];
  userTextInput: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.chats.subscribe((chats) => {
      this.chatsArray = chats;
    });
    this.chatService.botChats.subscribe((botChats) => {
      this.botChatsArray = botChats;
    });
  }

  onClickAddNewChat() {
    this.chatService.addNewChat(this.userTextInput);
    this.chatService.addNewResponse();
    this.userTextInput = "";
  }
}
