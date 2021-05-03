import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room';
import { SignalrService } from '../core/services/signalr.service';
import { StoreService } from '../core/services/store.service';
import { TitleService } from '../core/services/title.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  roomId: string | null | undefined;

  room: Room | null = null;

  private hubUrl: string = "https://delightful-pond-0f7aaaf10.azurestaticapps.net/api";

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private titleService: TitleService,
    private signalRService: SignalrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
      this.storeService.getRoom().subscribe(next => {
        this.room = next;
      });
      this.titleService.setTitle(`Effort App Room ${this.roomId}`);
    });
  }

}
