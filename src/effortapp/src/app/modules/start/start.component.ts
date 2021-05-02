import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room';
import { StoreService } from '../core/services/store.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  cardTypes: { name: string, value: string }[] = [{ name: 'Fibonacci', value: 'fibonacci' }, { name: 'T-Shirt Sizes', value: 'tshirt' }];

  selectedCards: any = this.cardTypes[0];
  roomName: string | undefined;

  constructor(private router: Router, private store: StoreService) { }

  ngOnInit(): void {
  }

  createRoom() {
    const roomId = this.guid();
    this.store.setRoom({
      name: this.roomName!,
      id: roomId,
      members: [],
      cards: this.getCards(''),
      votingRound: 0,
      votingHistory: []
    } as Room);
    this.router.navigateByUrl(`/room/${roomId}`);
  }

  private getCards(cardType: string): any[] {
    switch (cardType) {
      case 'fibonacci':
        return ['1', '3', '5', '8', '13', '21', '40', '?'];
      case 'tshirt':
        return ['Small', 'Medium', 'Large', 'XL', 'XXL'];
      default:
        return ['1', '3', '5', '8', '13', '21', '40', '?'];
    }
  }

  private guid(): string {
    const f = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${f() + f()}-${f()}-${f()}-${f()}-${f() + f() + f()}`;
  }

}
