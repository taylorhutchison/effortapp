import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private room: BehaviorSubject<Room | null> = new BehaviorSubject<Room | null>(null);

  getUser() {
    return from(this.user);
  }

  setUser(user: User) {
    if (window.localStorage) {
      localStorage.setItem('userName', user.name);
    }
    this.user.next(user);
  }

  setUserName(userName: string) {
    const user = this.user.value ?? {} as User;
    user.name = userName;
    this.setUser(user);
  }

  setRoom(room: Room) {
    this.room.next(room);
  }

  constructor() {
    if (window.localStorage) {
      this.user.next({
        name: localStorage.getItem('userName') as string
      } as User)
    }
  }

}
