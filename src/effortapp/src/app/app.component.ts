import { Component } from '@angular/core';
import { StoreService } from './modules/core/services/store.service';
import { TitleService } from './modules/core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: TitleService) {
    titleService.setTitle("Effort App");
  }
}
