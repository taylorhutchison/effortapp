import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string | null = "";

  user: User | null = null;

  constructor(private store: StoreService) {
    this.store.getUser().subscribe(next => this.user = next);
  }

  ngOnInit() {
  }

  setUserName() {
    if (this.userName) {
      this.store.setUserName(this.userName);
    }
  }

}
