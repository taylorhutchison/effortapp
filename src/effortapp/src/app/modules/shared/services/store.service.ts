import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  room: BehaviorSubject<Room | null> = new BehaviorSubject<Room | null>(null);

  constructor() { }
}
