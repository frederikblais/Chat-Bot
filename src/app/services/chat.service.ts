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

  addNewChat() {
    const newChat = this.generateNewChat();
    this.chats.pipe(take(1)).subscribe((allChats) => {
      allChats.push(newChat);
      this.chats.next(allChats);
    });
  }

  generateNewChat() {
    const currentTime = new Date().getTime();
    const chat: iChat = {
      sender: 'Sender',
      text: 'Hello!',
      sentOn: new Date(currentTime),
    };
    return chat;
  }
}
