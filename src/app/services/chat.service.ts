import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface iChat {
  sender: string;
  text: string;
  sentOn: Date;
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  chats: BehaviorSubject<iChat[]> = new BehaviorSubject(
    [] as iChat[]
  );
  
  constructor() { }

  addNewChat(input:string) {
    const newChat = this.generateNewChat(input);
    // const botChat = this.generateAIChat();

    this.chats.pipe(take(1)).subscribe((allChats) => {
      allChats.push(newChat);
      this.chats.next(allChats);
    });
  }

  generateNewChat(input:string) {
    const currentTime = new Date().getTime();
    const chat: iChat = {
      sender: 'User',
      text: input, // <- Add reference to this.userTextInput
      sentOn: new Date(currentTime),
    };
    return chat;
  }
}
