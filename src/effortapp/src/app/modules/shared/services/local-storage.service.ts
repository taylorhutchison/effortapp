import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }

  setUserName(userName: string) {
    localStorage.setItem('userName', userName);
  }
}
