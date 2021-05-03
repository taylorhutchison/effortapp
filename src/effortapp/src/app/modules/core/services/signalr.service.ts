import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  connection: signalR.HubConnection | null = null;

  constructor(private http: HttpClient) { }

  connect(url: string) {
    if (this.connection == null) {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl(url)
        .configureLogging(signalR.LogLevel.Information)
        .build();
      this.connection.on('newMessage', this.newMessage);
      this.connection.onclose(() => console.log('disconnected'));
      console.log('connecting...');
      this.connection.start()
        .then(() => console.log('ready'))
        .catch(console.error);
    }
  }


  sendMessage(messageText: any) {
    this.http.post(`${this.connection?.baseUrl}/messages`, {
      message: messageText
    }).subscribe();
  }

  newMessage(message: string) {
    console.log('receving message...');
    console.log(message);
  }
}
