import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StoreService } from '../../services/store.service';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string | null = "";

  user: User | null = null;

  showSetName: boolean = false;

  title: string | null = null;

  constructor(private store: StoreService, private titleService: TitleService) {
    this.store.getUser().subscribe(next => this.user = next);
    this.titleService.title.subscribe(next => this.title = next);
  }

  ngOnInit() {
  }

  setUserName() {
    if (this.userName) {
      this.store.setUserName(this.userName);
    }
    this.showSetName = false;
  }

}
