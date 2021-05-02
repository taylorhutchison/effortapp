import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  @Input()
  cards: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cards);
  }

}
