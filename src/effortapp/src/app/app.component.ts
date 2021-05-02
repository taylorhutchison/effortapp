import { Component } from '@angular/core';
import { User } from './models/user';
import { LocalStorageService } from './modules/shared/services/local-storage.service';
import { StoreService } from './modules/shared/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'effortapp';

  userName: string | null = "";

  user: User | null = null;

  constructor(private store: StoreService, private localStorage: LocalStorageService) {
    this.store.user.subscribe(next => this.user = next);
  }

  ngOnInit() {
    this.userName = this.localStorage.getUserName();
    this.store.user.next({
      name: this.userName
    } as User);
  }

  setUserName() {
    if (this.userName) {
      const user = this.store.user.value;
      user!.name = this.userName;
      this.store.user.next(user);
      this.localStorage.setUserName(this.userName);
    }
  }
}
