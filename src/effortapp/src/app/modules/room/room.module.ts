import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    RoomComponent,
    CardsContainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
