import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  connection: signalR.HubConnection | null = null;

  constructor() { }

  connect(url: string) {
    if (this.connection == null) {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl(url)
        .configureLogging(signalR.LogLevel.Information)
        .build();
    }
  }
}
