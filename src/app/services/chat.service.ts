import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface iChat {
  sender: string;
  text: string;
  sentOn: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chats: BehaviorSubject<iChat[]> = new BehaviorSubject([] as iChat[]);

  constructor() {}

  addNewChat(input: string) {
    const newChat = this.generateNewChat(input);

    this.chats.pipe(take(1)).subscribe((allChats) => {
      allChats.push(newChat);
      this.chats.next(allChats);
    });
  }

  // addNewResponse() {
  //   const newResponse = this.generateBotResponse();

  //   this.chats.pipe(take(1)).subscribe((allChats) => {
  //     allChats.push(newResponse);
  //     this.chats.next(allChats);
  //   });
  // }

  generateNewChat(input: string) {
    const currentTime = new Date().getTime();
    const chat: iChat = {
      sender: 'User',
      text: input,
      sentOn: new Date(currentTime),
    };
    return chat;
  }

  // generateBotResponse() {
  //   const currentTime = new Date().getTime();

  //   var responses = ['I see.', 'How are you doing?', 'Thats nice!', 'eggplant'];
  //   let response = responses[Math.floor(Math.random() * responses.length)];

  //   const botChat: iChat = {
  //     sender: 'User',
  //     text: response,
  //     sentOn: new Date(currentTime),
  //   };
  //   return botChat;
  // }
}
